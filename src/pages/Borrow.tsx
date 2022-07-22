import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import BorrowTitle from "@/components/borrow/BorrowTitle";
import Input from "@/components/base/Input";
import Button from "@/components/base/Button";
import SearchIcon from "@/images/SearchIcon";
import GetToken from "@/images/GetToken";
import BubbleGreen from "@/images/BubbleGreen";
import formatter from "@/utils/dolarFormater";
import { BORROW_PAIR_LIST } from "@/utils/constants";

const HEADER_BASE_STYLES =
  "p-2 w-1/5 text-center hidden md:flex flex-col justify-center";
const MARKET_STYLES =
  "flex items-center justify-between p-2 md:w-24 border-b-2 border-green-300 md:border-0";

const Borrow = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredList = useMemo(() => {
    return BORROW_PAIR_LIST.filter(
      ({ token, collateral }) =>
        token.toLowerCase().includes(search.toLowerCase()) ||
        collateral.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, BORROW_PAIR_LIST]);

  return (
    <div>
      <BorrowTitle />

      <div className="w-full mt-4">
        <Input
          customLeftItem={<SearchIcon />}
          placeholder={t("borrow.search")}
          customClasses="w-full px-2 mb-6"
          color="purple"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="hidden md:flex text-sm text-zinc-300 px-6 mb-1">
          <div className={MARKET_STYLES}>{t("borrow.markets")}</div>
          <div className={HEADER_BASE_STYLES}>{t("borrow.asset")}</div>
          <div className={HEADER_BASE_STYLES}>{t("borrow.collateral")}</div>
          <div className={HEADER_BASE_STYLES}>{t("borrow.oracle")}</div>
          <div className={HEADER_BASE_STYLES}>{t("borrow.utilization")}</div>
          <div className={HEADER_BASE_STYLES}>{t("borrow.apr")}</div>
        </div>
        {filteredList.map(
          (
            { token, collateral, apr, oracle, tokenLogo, collateralLogo },
            index
          ) => (
            <div
              key={`${token}-${collateral}-${index}`}
              className={[
                "bg-grey-950 mx-3 mb-3 border-4 border-violet-300 rounded-lg cursor-pointer",
                "md:pointer-events-auto md:flex md:hover:bg-grey-950/20 md:p-2",
              ].join(" ")}
              onClick={() =>
                navigate(`/borrow?main=${token}&collateral=${collateral}`)
              }
            >
              <div className={MARKET_STYLES}>
                <div className="flex items-center">
                  <img
                    src={collateralLogo}
                    className="w-8 h-8 z-[1] -mr-2 rounded-full"
                  />
                  <img src={tokenLogo} className="w-8 h-8" />
                </div>

                <div className="flex md:hidden items-center gap-1 text-xl">
                  <div>{token}</div>
                  <BubbleGreen />
                  <div>{collateral}</div>
                </div>
              </div>

              <div className={HEADER_BASE_STYLES}>
                <div className="text-xl">{token}</div>
              </div>

              <div className={HEADER_BASE_STYLES}>
                <div className="text-xl">{collateral}</div>
              </div>

              <div className={HEADER_BASE_STYLES}>{oracle}</div>

              <div className={HEADER_BASE_STYLES}>
                <div className="h-2 w-full rounded border border-pink-400 relative">
                  <div className="absolute h-1.5 w-1 bg-pink-100 top-0"></div>
                </div>
                <div className="text-xs pt-1">0 / $1.000.000 {token}</div>
              </div>

              <div className={HEADER_BASE_STYLES}>
                <div className="text-lg">{apr}%</div>
              </div>

              <div className="md:hidden">
                <div className="flex p-4 justify-between">
                  <div>
                    <div className="text-zinc-400">{t("borrow.apr")}</div>
                    <div className="text-lg">{apr}%</div>
                    <div className="text-zinc-400">{t("borrow.chainlink")}</div>
                  </div>
                  <div>
                    <div className="text-zinc-400">{t("borrow.liquidity")}</div>
                    <div className="text-lg">1,165,049 {token}</div>
                    <div className="text-sm text-zinc-400">$1,165,281</div>
                  </div>
                </div>

                <div className="py-3 px-4">
                  <Button
                    buttonColor="pink"
                    customClasses="w-full"
                    onClick={() =>
                      navigate(`/borrow?main=${token}&collateral=${collateral}`)
                    }
                  >
                    {t("borrow.borrow")}
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Borrow;
