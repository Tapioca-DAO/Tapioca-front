import { ethers } from "ethers";
import parseBigBalance from "@/utils/parseBigBalance";
import { NotificationContext } from "@/providers/NotificationContext";
import { loadContract__TEST } from "tapioca-sdk";
import { useContext, useEffect, useState } from "react";

interface ErrorMessage {
  message: string;
}

export const loanHooks = () => {
  const { useNotification } = useContext(NotificationContext);

  const winEthereum = (window as any).ethereum;
  const provider = new ethers.providers.Web3Provider(winEthereum);
  const signer = provider.getSigner();
  const { mixologist, yieldBox, beachbar, usdc, weth } =
    loadContract__TEST(signer);

  const useWethContract = (address: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAproving, setIsApproving] = useState(false);
    const [isMinting, setIsMiting] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [balance, setBalance] = useState("0");

    const updateBalance = async () => {
      setIsLoading(true);
      const balance = await weth.balanceOf(address);
      setBalance(parseBigBalance(balance));
      setIsLoading(false);
    };

    const mint = async ({ amount = 1 }) => {
      setIsMiting(true);
      try {
        const mintValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
        const mint = await weth.freeMint(mintValue);
        await mint.wait();
        updateBalance();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (message) useNotification(message);
      }

      setIsMiting(false);
    };

    const checkIsApproved = async () => {
      setIsApproving(true);
      try {
        const res = await weth.allowance(address, beachbar.address);
        setIsApproved(ethers.BigNumber.from(res ?? 0).gt(0));
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
      setIsApproving(false);
    };

    const approve = async () => {
      setIsApproving(true);
      try {
        const res = await weth["approve(address,uint256)"](
          beachbar.address,
          ethers.constants.MaxUint256
        );

        res.wait();
        setIsApproved(true);
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (message) useNotification(message);
      }
    };

    useEffect(() => {
      updateBalance();
      checkIsApproved();
    }, []);

    return {
      balance,
      updateBalance,
      isLoading,
      isMinting,
      mint,
      approve,
      isApproved,
      isAproving,
    };
  };

  const useUsdcContract = (address: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMinting, setIsMiting] = useState(false);
    const [isAproving, setIsApproving] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [balance, setBalance] = useState("0");

    const updateBalance = async () => {
      setIsLoading(true);
      try {
        const balance = await usdc.balanceOf(address);
        setBalance(parseBigBalance(balance));
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
      setIsLoading(false);
    };

    const mint = async ({ amount = 1 }) => {
      setIsMiting(true);

      try {
        const mintValue = ethers.BigNumber.from((1e18).toString()).mul(amount);
        const mint = await usdc.freeMint(mintValue);
        await mint.wait();
        updateBalance();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }

      setIsMiting(false);
    };

    const checkIsApproved = async () => {
      setIsApproving(true);
      try {
        const res = await yieldBox.isApprovedForAll(address, mixologist.address);
        setIsApproved(res);
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
      setIsApproving(false);
    };

    const approve = async () => {
      setIsApproving(true);
      try {
        const res = await yieldBox.setApprovalForAll(mixologist.address, true);

        await res.wait();

        checkIsApproved();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }

      setIsApproving(false);
    };

    useEffect(() => {
      updateBalance();
      checkIsApproved();
    }, []);

    return {
      balance,
      updateBalance,
      isMinting,
      isLoading,
      mint,
      approve,
      isAproving,
      isApproved,
    };
  };

  const useBeachbarContract = (address: string) => {
    const [assetBalance, setAssetBalance] = useState("");

    const getAssetInBeachbar = async () => {
      const assetId = await mixologist.assetId();
      const balance = await yieldBox.balanceOf(address, assetId);
      setAssetBalance(parseBigBalance(balance));
    };

    const deposit = async ({ amount = 0 }) => {
      const lendValue = amount * 10000000000;

      const assetId = await mixologist.assetId();
      const share = await yieldBox.toShare(assetId, lendValue, false);

      try {
        const res = await yieldBox.depositAsset(
          assetId,
          address,
          address,
          lendValue,
          share
        );

        await res.wait();
        getAssetInBeachbar();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
    };

    useEffect(() => {
      getAssetInBeachbar();
    }, []);

    return { assetBalance, deposit };
  };

  const useMixologistContract = (address: string) => {
    const [depositedCollateral, setDepositedCollateral] = useState("0");

    const getDepositedCollateral = async () => {
      const balance = await mixologist.balanceOf(address);
      setDepositedCollateral(parseBigBalance(balance));
    };

    const lendAsset = async ({ amount = 0 }) => {
      const lendValue = amount * 10000000000;

      const assetId = await mixologist.assetId();
      const share = await yieldBox.toShare(assetId, lendValue, false);

      try {
        const res = await mixologist.addAsset(address, false, share);
        await res.wait();
        getDepositedCollateral();
        // TODO: update asset
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
    };

    useEffect(() => {
      getDepositedCollateral();
    }, []);

    return {
      lendAsset,
      depositedCollateral,
    };
  };

  return {
    useWethContract,
    useUsdcContract,
    useBeachbarContract,
    useMixologistContract,
  };
};
