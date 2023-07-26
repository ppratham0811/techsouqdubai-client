import { Account, ID, Databases } from "appwrite";
import {
  client,
  mainDatabaseID,
  usersCollectionID,
  productsCollectionID,
  ordersCollectionID,
  categoryCollectionID,
} from "../Appwrite";

const account = new Account(client);
const database = new Databases(client);

const registerUser = async (userData) => {
  await database
    .createDocument(mainDatabaseID, usersCollectionID, ID.unique(), userData)
    .then((res) => res)
    .catch((e) => console.error(e));
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
      .then((res) => res)
      .catch((e) => console.error(e));
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
  getAllProducts,
  registerUser,
  getCategories,
  getCategoryById,
  getProductsFromCategory,
  getProductById,
  getWishlist,
};
