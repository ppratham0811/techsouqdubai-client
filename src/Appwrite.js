import { Client } from "appwrite";

const categoryCollectionID = "6463c06dcd8461180987";
const ordersCollectionID = "6464f3d749d7a7ac75ba";
const productsCollectionID = "64652e560ee0b611f96f";
const usersCollectionID = "64b94ed7251a2915cd0e";
const mainDatabaseID = "6463bd7a52591d3378f8";
const navLinkCollectionID = "64f88f838325840357b3";

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
  usersCollectionID,
  navLinkCollectionID
};
