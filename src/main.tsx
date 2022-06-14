import React from "react";
import App from "@/pages/App";
import { Config, DAppProvider, Rinkeby } from "@usedapp/core";

import { createRoot } from 'react-dom/client';

import "@/styles/index.scss";
import "@/styles/index.css";
import "@/config/i18n";

const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
};

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
);
