import { ethers } from "ethers";
import parseBigBalance from "@/utils/parseBigBalance";
import { NotificationContext } from "@/providers/NotificationContext";
import { loadContract__TEST } from "tapioca-sdk";
import { useContext, useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

interface ErrorMessage {
  message: string;
}

export const loanHooks = () => {
  const { useNotification } = useContext(NotificationContext);
  const { account: address, library } = useEthers();
  const signer = library?.getSigner();

  if (!address || !signer) {
    return () => ({
      wethBalance: "",
      wethDeposited: "",
      isLoadingWeth: false,
      isMintingWeth: false,
      isWethApproved: false,
      isWethApproving: false,
      mintWETH: () => {},
      approveWeth: () => {},
      usdcBalance: "",
      depositedCollateral: "",
      isMintingUsdc: false,
      isLoadingUsdc: false,
      isUsdcApproved: false,
      isUsdcApproving: false,
      mintUSDC: () => {},
      approveUsdc: () => {},
      depositAsset: () => {},
      lendAsset: () => {},
    });
  }

  const { mixologist, yieldBox, beachbar, usdc, weth } =
    loadContract__TEST(signer);

  const useContract = () => {
    const [asset, setAsset] = useState({
      asset: "WETH",
      balance: "0",
      depositedBalance: "0",
      isLoading: true,
      isApproved: false,
      isApproving: false,
      isMinting: false,
    });

    const [collateral, setCollateral] = useState({
      asset: "USDC",
      balance: "0",
      depositedBalance: "0",
      isLoading: true,
      isApproved: false,
      isApproving: false,
      isMinting: false,
    });

    const updateAssetBalance = async () => {
      setAsset({ ...asset, isLoading: true });

      const assetId = await mixologist.assetId();
      const balance = await weth.balanceOf(address);
      const depositedBalance = await yieldBox.balanceOf(address, assetId);

      setAsset({
        ...asset,
        balance: parseBigBalance(balance),
        depositedBalance: parseBigBalance(depositedBalance),
        isLoading: false,
      });
    };

    const updateCollateralBalance = async () => {
      setCollateral({ ...collateral, isLoading: true });
      const balance = await usdc.balanceOf(address);
      const depositedBalance = await mixologist.balanceOf(address);

      setCollateral({
        ...collateral,
        balance: parseBigBalance(balance),
        depositedBalance: parseBigBalance(depositedBalance),
        isLoading: false,
      });
    };

    const mintWETH = async () => {
      setAsset({ ...asset, isMinting: true });
      try {
        const mintValue = ethers.BigNumber.from((1e18).toString()).mul(1);
        const mint = await weth.freeMint(mintValue);

        await mint.wait();
        updateAssetBalance();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (message) useNotification(message);
      }
      setAsset({ ...asset, isMinting: false });
    };

    const mintUSDC = async () => {
      setCollateral({ ...collateral, isMinting: true });
      try {
        const mintValue = ethers.BigNumber.from((1e18).toString()).mul(1);
        const mint = await usdc.freeMint(mintValue);
        await mint.wait();
        updateCollateralBalance();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (message) useNotification(message);
      }

      setCollateral({ ...collateral, isMinting: false });
    };

    const checkAsset = async () => {
      try {
        const res = await weth.allowance(address, beachbar.address);
        setAsset({
          ...asset,
          isApproved: ethers.BigNumber.from(res ?? 0).gt(0),
        });
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }

      updateAssetBalance();
    };

    const checkCollateral = async () => {
      try {
        const res = await yieldBox.isApprovedForAll(
          address,
          mixologist.address
        );
        setAsset({
          ...asset,
          isApproved: res,
        });
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }

      updateCollateralBalance();
    };

    const approveWeth = async () => {
      setAsset({ ...asset, isApproving: false });
      let isApproved = false;
      try {
        const res = await weth["approve(address,uint256)"](
          beachbar.address,
          ethers.constants.MaxUint256
        );

        res.wait();
        isApproved = true;
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (message) useNotification(message);
      }

      setAsset({ ...asset, isApproving: false, isApproved });
    };

    const approveUsdc = async () => {
      setCollateral({ ...collateral, isApproving: true });
      let isApproved = false;
      try {
        const res = await yieldBox.setApprovalForAll(mixologist.address, true);

        await res.wait();
        isApproved = true;
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }

      setCollateral({ ...collateral, isApproving: false, isApproved });
    };

    const depositAsset = async ({ amount = 0 }) => {
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
        updateAssetBalance();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
    };

    const lendAsset = async ({ amount = 0 }) => {
      const lendValue = amount * 10000000000;

      const assetId = await mixologist.assetId();
      const share = await yieldBox.toShare(assetId, lendValue, false);

      try {
        const res = await mixologist.addAsset(address, false, share);
        await res.wait();
        updateCollateralBalance();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
    };

    useEffect(() => {
      checkAsset();
      checkCollateral();
    }, []);

    return {
      wethBalance: asset.balance,
      wethDeposited: asset.depositedBalance,
      isLoadingWeth: asset.isLoading,
      isMintingWeth: asset.isMinting,
      isWethApproved: asset.isApproved,
      isWethApproving: asset.isApproving,
      mintWETH,
      approveWeth,
      usdcBalance: collateral.balance,
      depositedCollateral: collateral.depositedBalance,
      isMintingUsdc: collateral.isMinting,
      isLoadingUsdc: collateral.isLoading,
      isUsdcApproved: collateral.isApproved,
      isUsdcApproving: collateral.isApproving,
      mintUSDC,
      approveUsdc,
      depositAsset,
      lendAsset,
    };
  };

  return useContract;
};
