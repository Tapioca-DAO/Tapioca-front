import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList, PoolProps } from "@/pages/Flashloans";
import SelectDropdown from "@/components/base/SelectDropdown";
import FurucomboTokenImage from "@/components/furucombo/FurucomboTokenImage";

interface Props {
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
  poolType?: string;
  pools?: PoolProps[];
  tokenBalance?: number;
}

const FurucomboPool = ({
  setCardCube,
  currentSelection,
  poolType,
  pools,
  tokenBalance = 0,
}: Props) => {
  const { t } = useTranslation();

  const [selectedPool, setSelectedPool] = useState<string>(
    pools?.[0]?.pool || ""
  );
  const [amount, setAmount] = useState<number>();

  const currentToken = useMemo(() => {
    const currentPool = pools?.find(({ pool }) => pool === selectedPool);
    return currentPool?.tokens?.length
      ? currentPool.tokens
      : currentPool?.token;
  }, [pools, selectedPool]);

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-custom-grey-1">{t(`furucombo.pool`)}</div>
          <div className="flex items-center w-full">
            <div className="mr-2">
              <FurucomboTokenImage
                token={
                  Array.isArray(currentToken) ? currentToken[0] : currentToken
                }
              />
            </div>
            <div className="w-full">
              <SelectDropdown
                flexWidth
                selectedOption={selectedPool}
                objectOptins={pools?.map(({ pool, token, tokens }) => ({
                  op: pool,
                  token: tokens?.[0] || token || pool,
                }))}
                selectOption={(op: string) => setSelectedPool(op)}
              />
            </div>
          </div>

          <div className="text-custom-grey-1 mt-4">
            {t(`furucombo.${poolType}`)}
          </div>
          <div>
            {currentToken && (
              <div>
                {Array.isArray(currentToken) ? (
                  <div>
                    {currentToken.map((token) => (
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <FurucomboTokenImage token={token} />
                          <div className="ml-2 text-xl">{token}</div>
                        </div>
                        <div>{tokenBalance}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <FurucomboTokenImage token={currentToken} />
                      <div className="ml-2 text-xl">{currentToken}</div>
                    </div>

                    {currentSelection === "synthetix:claim_rewards" ? (
                      <div>{tokenBalance}</div>
                    ) : (
                      <input
                        className="bg-transparent border-b py-2 text-right"
                        placeholder="Amount"
                        type="number"
                        value={amount || ""}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pt-4">
            <div className="flex justify-between">
              <p className="text-xs text-zinc-400">
                {t("furucombo.combo.currentlyStaked")}
              </p>

              <p className="text-sm">
                0 <span className="text-zinc-400">{currentToken}</span>
              </p>
            </div>

            <div className="flex justify-between pt-1">
              <p className="text-xs text-zinc-400">
                {t("furucombo.combo.rewardsAvailable")}
              </p>
              <p className="text-sm">
                0 <span className="text-zinc-400">SNX</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        disabled={!amount || !selectedPool}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            amount,
            token: currentToken,
            pool: selectedPool,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("furucombo.set")}
      </button>
    </div>
  );
};

export default FurucomboPool;
