import { useEffect, useMemo, useState } from "react";
import BorrowSelectTokenCard from "@/components/borrow/BorrowSelectTokenCard";
import BorrowTitle from "@/components/borrow/BorrowTitle";
import { TOKENS_SYMBOLS, BORROW_TOKEN_LIST } from "@/utils/tokens";
import BorrowFooter from "@/components/borrow/BorrowFooter";

const Borrow = () => {

  const [mainToken, setMainToken] = useState(TOKENS_SYMBOLS.ETH);
  const [collateral, setCollateral] = useState("");
  const [noviceMode, setNoviceMode] = useState("no");

  const collateralListOfTokens = useMemo(() => {
    const { ETH, FRAX, BOBA, USDC, DAI } = TOKENS_SYMBOLS;

    if (mainToken === USDC) return [ETH, DAI, BOBA, FRAX];
    if (mainToken === DAI) return [ETH, USDC, BOBA];
    if (mainToken === ETH) return [USDC, DAI, BOBA, FRAX];

    return [];
  }, [mainToken]);

  useEffect(() => {
    if (collateralListOfTokens[0]) {
      setCollateral(collateralListOfTokens[0]);
    }
  }, [collateralListOfTokens]);

  return (
    <div>
      <BorrowTitle />

      <div className="md:m-8 my-4 mx-3 md:flex items-center justify-between">
        <BorrowSelectTokenCard
          tokenList={BORROW_TOKEN_LIST.map(({ symbol }) => symbol)}
          selected={mainToken}
          selectToken={(token: string) => setMainToken(token)}
        />
        <div className="md:text-7xl text-3xl font-bebas-neue text-blue-300 text-center md:mx-10">
          VS
        </div>
        <BorrowSelectTokenCard
          tokenList={collateralListOfTokens}
          selected={collateral}
          isCollateral
          selectToken={(token: string) => setCollateral(token)}
        />
      </div>

      <BorrowFooter
        mainToken={mainToken}
        collateral={collateral}
        setNoviceMode={setNoviceMode}
        noviceMode={noviceMode}
      />
    </div>
  );
};

export default Borrow;
