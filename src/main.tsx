import "./index.css";

import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import { StrictMode } from "react";
import { client } from "./apollo/client.ts";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
