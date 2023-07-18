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
  await database
    .listDocuments(mainDatabaseID, productsCollectionID)
    .then((res) => res)
    .catch((e) => console.error(e));
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

export { getAllProducts, registerUser, getCategories };
