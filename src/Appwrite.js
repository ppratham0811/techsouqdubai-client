import { Client } from "appwrite";

const categoryCollectionID = "6463c06dcd8461180987";
const ordersCollectionID = "6464f3d749d7a7ac75ba";
const productsCollectionID = "64652e560ee0b611f96f";
const usersCollectionID = "64b129efd72e57408828";
const mainDatabaseID = "6463bd7a52591d3378f8";
const usersDatabaseID = "64b129df5af7518ca093";

const client = new Client();

client
  .setEndpoint("https://appwrite.techsouqdubai.com/v1")
  .setProject("646339a61beac87efd09");

export {
  client,
  categoryCollectionID,
  ordersCollectionID,
  productsCollectionID,
  mainDatabaseID,
  usersDatabaseID,
  usersCollectionID,
};
