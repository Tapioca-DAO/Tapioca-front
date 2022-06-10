import { createContext, useState, ReactElement } from "react";
import parseBigBalance from "@/utils/parseBigBalance";
import { useEtherBalance, useEthers } from "@usedapp/core";

interface WalletProviderProps {
  children: ReactElement;
}

export interface WalletContextProps {
  wallet: {
    address?: string;
    balance: string;
  };
  isConnected: boolean;
  isConnecting: boolean;
  metamaskNotAvailable: boolean;
  connectWallet: () => void;
}

export const WalletContext = createContext({} as WalletContextProps);

export const WalletConsumer = WalletContext.Consumer;

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const { activateBrowserWallet, account, active } = useEthers();
  const balance = useEtherBalance(account);

  const winEthereum = (window as any).ethereum;

  const connectWallet = async () => {
    if (!winEthereum) return;
    setIsConnecting(true);
    activateBrowserWallet();
    setIsConnecting(false);
  };

  return (
    <WalletContext.Provider
      value={{
        wallet: {
          address: account,
          balance: balance ? parseBigBalance(balance) : "0",
        },
        isConnected: active,
        isConnecting,
        metamaskNotAvailable: !winEthereum,
        connectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
