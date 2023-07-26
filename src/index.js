import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./app/persist";
import Loading from "./utils/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
