import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: "com.jsm.ecommerce",
  projectId: '6613969044ca1ce65716',
  databaseId: '6613c8f8a84aa6af3af5',
  storageId: '6613c7d6c69f99ba57aa',
  userCollectionId: '661627fc1c442081bb84',
  productCollectionId: '66163a4f6e53c98e3568',
};

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  storageId,
  userCollectionId,
  productCollectionId
} = config;

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
    console.log("newAccount", newAccount);
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        uid: newAccount.$id,
        email,
        username,
        password: password,
        // address,
        // phone,
        userType: "Client",
        profile: avatarUrl,
      }
    )

    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal('uid', currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export const getAllProducts = async () => {
  try {
    const products = await databases.listDocuments(
      databaseId,
      productCollectionId
    );

    return products.documents;
  }catch(error) {
    throw new Error(error);
  }
}
