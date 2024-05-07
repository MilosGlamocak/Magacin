import {Client, Account, ID, Avatars, Databases, Query} from 'appwrite'

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'React-magacin',
    projectId: '66293634bb830fa52b6d',
    databaseId: '66293c6c368a20462255',
    userCollectionId: '66293ca00a23d5313cbf',
    itemCollectionId: '66293cba8fa07da42a89',
    storageId: '662b55abb74975754343'
}

const {endpoint, platform, projectId, databaseId, userCollectionId, itemCollectionId, storageId} = appwriteConfig;

// Init your Web SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username) // try to create new acc

        if (!newAccount) throw Error; // if can't create

        const avatarUrl = avatars.getInitials(username) // if created new account, create an avatar

        await signIn(email, password)

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId, 
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            },
        )

        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailSession(email, password)

        return session
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0]
    } catch (error) {
        console.error(error);
    }
}

export const getAllItems = async () => {
    try {
        const currentItems = await databases.listDocuments(
            databaseId,
            itemCollectionId,
            [Query.select(['name', 'quantity', 'price'])]
        )

        if (!currentItems) throw Error;

        return currentItems;
    } catch (error) {
        console.log(error)
    }
}

export const deleteSession = async () => {
    
}