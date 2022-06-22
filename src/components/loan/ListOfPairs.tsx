import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PAIR_LIST } from "@/utils/constants";
import formatter from "@/utils/dolarFormater";
import GetToken from "@/images/GetToken";
import BubbleGreen from "@/images/BubbleGreen";
import Button from "@/components/Button";
import SearchIcon from "@/images/SearchIcon";
import Input from "@/components/Input";

const HEADER_BASE_STYLES =
  "p-2 w-1/6 text-center hidden md:flex flex-col justify-center";
const MARKET_STYLES =
  "flex items-center justify-between p-2 md:w-24 border-b-2 border-custom-green md:border-0";

const ListOfPairs = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredList = useMemo(() => {
    return PAIR_LIST.filter(
      ({ token, collateral }) =>
        token.toLowerCase().includes(search.toLowerCase()) ||
        collateral.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, PAIR_LIST]);

  return (
    <div>
      <div className="flex md:mt-14 mt-2 text-center border-b-4 border-custom-green">
        <div className="px-2 md:text-5xl text-2xl font-bebas-neue mx-1">
          Loan Market
        </div>
      </div>

      <div className="w-full mt-4">
        <Input
          customLeftItem={<SearchIcon />}
          placeholder="Search by token or pair"
          customClasses="w-full px-2 mb-6"
          color="purple"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="hidden md:flex text-sm text-zinc-300 px-6 mb-1">
          <div className={MARKET_STYLES}>Markets</div>
          <div className={HEADER_BASE_STYLES}>Asset</div>
          <div className={HEADER_BASE_STYLES}>Collateral</div>
          <div className={HEADER_BASE_STYLES}>Oracle</div>
          <div className={HEADER_BASE_STYLES}>Borrowed</div>
          <div className={HEADER_BASE_STYLES}>Available</div>
          <div className={HEADER_BASE_STYLES}>APR</div>
        </div>
        {filteredList.map(
          (
            { token, collateral, apr, oracle, borrowed, available, tokenPrice },
            index
          ) => (
            <div
              key={`${token}-${collateral}-${index}`}
              className={[
                "bg-custom-grey-4/50 mx-3 mb-3 border-4 border-custom-pink-1 rounded-lg cursor-pointer",
                "md:pointer-events-auto md:flex md:hover:bg-custom-grey-4/80 md:p-2",
              ].join(" ")}
              onClick={() =>
                navigate(`/loan?main=${token}&collateral=${collateral}`)
              }
            >
              <div className={MARKET_STYLES}>
                <div className="flex items-center">
                  <GetToken
                    token={token}
                    isSelected
                    className="w-10 h-10 z-0 -mr-3"
                  />
                  <GetToken
                    token={collateral}
                    isSelected
                    className="w-10 h-10 z-100"
                  />
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
                <div className="text-lg">{formatter.format(borrowed)}</div>
                <div className="text-xs text-zinc-400">
                  {parseFloat((borrowed / tokenPrice).toFixed(3))} {token}
                </div>
              </div>

              <div className={HEADER_BASE_STYLES}>
                {formatter.format(available)}
                <div className="text-xs text-zinc-400">
                  {parseFloat((available / tokenPrice).toFixed(3))} {token}
                </div>
              </div>
              <div className={HEADER_BASE_STYLES}>
                <div className="text-lg">{apr}%</div>
              </div>

              <div className="md:hidden">
                <div className="flex p-4 justify-between">
                  <div>
                    <div className="text-zinc-400">APR</div>
                    <div className="text-lg">{apr}%</div>
                    <div className="text-zinc-400">Chainlink</div>
                  </div>
                  <div>
                    <div className="text-zinc-400">Liquidity</div>
                    <div className="text-lg">1,165,049 {token}</div>
                    <div className="text-sm text-zinc-400">$1,165,281</div>
                  </div>
                </div>

                <div className="py-3 px-4">
                  <Button
                    buttonColor="pink"
                    customClasses="w-full"
                    onClick={() =>
                      navigate(`/loan?main=${token}&collateral=${collateral}`)
                    }
                  >
                    Loan
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

export default ListOfPairs;
