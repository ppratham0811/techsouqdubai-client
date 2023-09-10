import { Account, ID, Databases, Query } from "appwrite";
import {
  client,
  mainDatabaseID,
  usersCollectionID,
  productsCollectionID,
  categoryCollectionID,
  ordersCollectionID,
  navLinkCollectionID,
  categoryRelationCollectionID,
} from "../Appwrite";

const account = new Account(client);
const database = new Databases(client);

const getAllUsers = async () => {
  try {
    await database
      .listDocuments(mainDatabaseID, usersCollectionID)
      .then((res) => {
        console.log(res.documents);
        return res.documents;
      })
      .catch((e) => {
        return e.message;
      });
  } catch (e) {
    console.log(e.message);
  }
};

const getCurrentUser = async () => {
  try {
    const currentUser = await account.get();
    if (currentUser) {
      return currentUser;
    }
  } catch (e) {
    console.error(e);
  }
};

const registerUser = async (userData) => {
  try {
    const userRegistered = await account.create(
      ID.unique(),
      userData.email,
      userData.password,
      userData.name
    );

    const userSaved = await database.createDocument(
      mainDatabaseID,
      usersCollectionID,
      ID.unique(),
      {
        email: userData.email,
        fullName: userData.name,
      }
    );
    if (userRegistered && userSaved) {
      console.log(userSaved);
      return await loginUser({
        email: userData.email,
        password: userData.password,
      });
    }
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

const loginUser = async (loginDetails) => {
  try {
    const loggedUser = await account.createEmailSession(
      loginDetails.email,
      loginDetails.password
    );
    if (loggedUser) {
      return {
        status: true,
        userId: loggedUser.$id,
        email: loginDetails.email,
      };
    }
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

const deleteCurrentSession = async () => {
  try {
    // Get the current user
    const currentUser = await account.get();
    console.log("current user: ", currentUser);
    if (currentUser) {
      // Delete the current session
      await account.deleteSession("current");
      return {
        status: true,
      };
    } else {
      // The user is not logged in
      console.log("The user is not logged in");
      return {
        status: false,
        message: "The User is logged in",
      };
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

const getNavLinks = async () => {
  try {
    return await database
      .listDocuments(mainDatabaseID, navLinkCollectionID)
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

const getAllOrders = async () => {
  try {
    const allOrders = await database.listDocuments(
      mainDatabaseID,
      ordersCollectionID
    );
    return allOrders.documents;
  } catch (e) {
    return e.message;
  }
};

const getCurrentUserOrders = async (userEmail) => {
  try {
    const allOrders = await getAllOrders();
    console.log(allOrders);
    const userOrders = [];
    if (allOrders?.length > 0) {
      for (let order of allOrders) {
        if (order.email === userEmail) {
          userOrders.push(order);
        }
      }
    }
    return userOrders;
  } catch (e) {
    console.log(e.message);
  }
};

const placeOrder = async (orderData) => {
  try {
    console.log(orderData);
    await database
      .createDocument(
        mainDatabaseID,
        ordersCollectionID,
        ID.unique(),
        orderData
      )
      .then(async (res) => {
        return res;
      })
      .catch((e) => {
        console.log(e.message);
        return e.message;
      });
  } catch (e) {
    console.log({ message: e.message });
  }
};
const getNavBarLink = async (id) => {
  try {
    return await database
      .getDocument(mainDatabaseID, navLinkCollectionID, id)
      .then((res) => res)
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};

const updateProductQuantity = async (productId, quantity) => {
  try {
    await database
      .updateDocument(mainDatabaseID, productsCollectionID, productId, {
        quantity,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e.message);
  }
};

const getRelations = async () => {
  try {
    return await database
      .listDocuments(mainDatabaseID, categoryRelationCollectionID)
      .then((res) => res)
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};

const getChildCategories = async (parentId) => {
  try {
    return await database
      .listDocuments(mainDatabaseID, categoryRelationCollectionID, [
        Query.equal("parent", parentId),
      ])
      .then((res) => res)
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};

const getProudctsWithSearchTerm = async (text) => {
  try {
    return await database
      .listDocuments(mainDatabaseID, productsCollectionID, [
        Query.search("title", text),
      ])
      .then((res) => res)
      .catch((e) => console.error(e.message));
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
  placeOrder,
  getAllOrders,
  getCurrentUserOrders,
  getNavLinks,
  getNavBarLink,
  getChildCategories,
  getRelations,
  getProudctsWithSearchTerm,
  updateProductQuantity,
};
