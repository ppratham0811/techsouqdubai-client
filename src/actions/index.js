import { Account, ID, Databases } from "appwrite";
import {
  client,
  mainDatabaseID,
  usersDatabaseID,
  usersCollectionID,
  productsCollectionID,
  ordersCollectionID,
  categoryCollectionID,
} from "../Appwrite";

const account = new Account(client);
const database = new Databases(client);

const registerUser = async (userData) => {
  await database
    .createDocument(usersDatabaseID, usersCollectionID, ID.unique(), userData)
    .then((res) => res)
    .catch((e) => console.error(e));
};

const getAllProducts = async () => {
  try {
    return await database
      .listDocuments(mainDatabaseID, productsCollectionID)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
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

export {
  getAllProducts,
  registerUser,
  getCategories,
  getCategoryById,
  getProductsFromCategory,
};
