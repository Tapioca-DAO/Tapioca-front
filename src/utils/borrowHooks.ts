import { ethers } from "ethers";
import parseBigBalance from "@/utils/parseBigBalance";
import { NotificationContext } from "@/providers/NotificationContext";
import { loadContract__TEST } from "tapioca-sdk";
import { useContext, useEffect, useState } from "react";

interface ErrorMessage {
  message: string;
}

const STATUS = {
  APPROVING: "APPROVING",
  DEPOSITING: "DEPOSITING",
  BORROWING: "BORROWING",
  WITHDRAWING: "WITHDRAWING",
};

export const borrowHooks = () => {
  const { useNotification } = useContext(NotificationContext);

  const winEthereum = (window as any).ethereum;

  if (!winEthereum) {
    return () => ({
      inProgress: false,
      assetBalance: "0",
      depositedCollateral: "0",
      borrow: () => {},
      status: "",
    });
  }

  const provider = new ethers.providers.Web3Provider(winEthereum);
  const signer = provider.getSigner();
  const { mixologist, beachbar, weth, usdc } = loadContract__TEST(signer);

  const useContract = (address: string) => {
    const [assetBalance, setAssetBalance] = useState("0");
    const [depositedCollateral, setDepositedCollateral] = useState("0");
    const [inProgress, setInProgress] = useState(false);

    const [status, setStatus] = useState("");

    const getAssetInBeachbar = async () => {
      const balance = await weth.balanceOf(address);
      setDepositedCollateral(parseBigBalance(balance));
    };

    const getDepositedCollateral = async () => {
      const balance = await usdc.balanceOf(address);
      setAssetBalance(parseBigBalance(balance));
    };

    const usdcDepositAndAddCollateral = async (amount = 0) => {
      const value = amount * 10000000000;
      const assetId = await mixologist.assetId();
      const share = await beachbar.toShare(assetId, value, false);

      try {
        const id = await mixologist.collateralId();
        const depositRes = await beachbar[
          "deposit(uint256,address,address,uint256,uint256)"
        ](id, address, address, share, 0);

        await depositRes.wait();

        const collateralRes = await mixologist.addCollateral(
          address,
          false,
          share
        );

        await collateralRes.wait();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
    };

    const wethBorrowAndWithdrawal = async (amount = 0) => {
      const value = amount * 10000000000;

      const assetId = await mixologist.assetId();
      const share = await beachbar.toShare(assetId, value, false);

      try {
        const borrowRes = await mixologist.borrow(address, share);
        await borrowRes.wait();

        setStatus(STATUS.WITHDRAWING);

        const withdrawalRes = await beachbar[
          "withdraw(uint256,address,address,uint256,uint256,bool)"
        ](assetId, address, address, share, 0, false);

        await withdrawalRes.wait();
      } catch (error) {
        const { message } = error as ErrorMessage;
        if (error) useNotification(message);
      }
    };

    const approveTokensAndSetBarApproval = async () => {
      await (
        await weth["approve(address,uint256)"](
          beachbar.address,
          ethers.constants.MaxUint256
        )
      ).wait();

      await (await beachbar.setApprovalForAll(mixologist.address, true)).wait();
    };

    const borrow = async ({ collateralAmount = 0, borrowAmount = 0 }) => {
      setInProgress(true);

      try {
        setStatus(STATUS.APPROVING);
        await approveTokensAndSetBarApproval();
        setStatus(STATUS.DEPOSITING);
        await usdcDepositAndAddCollateral(collateralAmount);
        setStatus(STATUS.BORROWING);
        await wethBorrowAndWithdrawal(borrowAmount);
        setStatus("");
        setInProgress(false);
      } catch (err) {
        setStatus("");
        setInProgress(false);
      }
    };

    useEffect(() => {
      if (!inProgress) {
        getAssetInBeachbar();
        getDepositedCollateral();
      }
    }, [inProgress]);

    return { assetBalance, depositedCollateral, inProgress, borrow, status };
  };

  return useContract;
};
