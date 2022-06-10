import React from "react";
import ReactDOM from "react-dom";
import App from "@/pages/App";
import { Config, DAppProvider, Rinkeby } from "@usedapp/core";

import "@/styles/index.scss";
import "@/styles/index.css";
import "@/config/i18n";

const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
