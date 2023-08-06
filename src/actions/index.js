import { Account, ID, Databases, Permission, Role } from "appwrite";
import {
  client,
  mainDatabaseID,
  usersCollectionID,
  productsCollectionID,
  categoryCollectionID,
} from "../Appwrite";

const account = new Account(client);
const database = new Databases(client);

const getCurrentUser = async () => {
  try {
    const currentUser = await account.get();
    console.log(currentUser);
    if (currentUser) {
      return currentUser;
    }
  } catch (e) {
    console.error(e);
  }
};

const registerUser = async (userData) => {
  try {
    const user = await account.create(
      ID.unique(),
      userData.email,
      userData.password,
      userData.name
    );
    if (user) {
      await loginUser({ email: userData.email, password: userData.password });
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (loginDetails) => {
  try {
    return await account.createEmailSession(
      loginDetails.email,
      loginDetails.password
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteCurrentSession = async () => {
  try {
    // Get the current user
    const currentUser = await account.get();

    if (currentUser) {
      // Delete the current session
      await account.deleteSession('current');
    } else {
      // The user is not logged in
      console.log("The user is not logged in");
    }
  } catch (error) {
    console.error(error);
  }
};

const getAllProducts = async () => {
  try {
    return await database
      .listDocuments(mainDatabaseID, productsCollectionID)
      .then((res) => {
        return res;
      })
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};

const getProductById = async (productId) => {
  try {
    return await database
      .getDocument(mainDatabaseID, productsCollectionID, productId)
      .then((res) => {
        return {
          status: true,
          res,
        };
      })
      .catch((e) => {
        return {
          status: false,
          productExists: false,
          error: e.message,
        };
      });
  } catch (e) {
    console.error(e.message);
  }
};

const getCategories = async () => {
  try {
    return await database
      .listDocuments(mainDatabaseID, categoryCollectionID)
      .then((res) => res)
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e.message);
  }
};

const getCategoryById = async (categoryId) => {
  try {
    return await database
      .getDocument(mainDatabaseID, categoryCollectionID, categoryId)
      .then((res) => res)
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e.message);
  }
};

const getProductsFromCategory = async (categoryId) => {
  try {
    return await database
      .listDocuments(mainDatabaseID, productsCollectionID, [
        `category=${categoryId}`,
      ])
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => {
        console.error(e);
      });
  } catch (e) {
    console.error(e);
  }
};

const getWishlist = async ({ userId }) => {
  try {
    return await database
      .getDocument(mainDatabaseID, usersCollectionID, userId)
      .then((res) => res)
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};

export {
  getCurrentUser,
  getAllProducts,
  loginUser,
  deleteCurrentSession,
  registerUser,
  getCategories,
  getCategoryById,
  getProductsFromCategory,
  getProductById,
  getWishlist,
};
