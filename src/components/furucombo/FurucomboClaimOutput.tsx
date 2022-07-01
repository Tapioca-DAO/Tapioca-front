import { useTranslation } from "react-i18next";
import uuid from "uuid";
import { ComboList } from "@/pages/Flashloans";
import FurucomboTokenImage from "./FurucomboTokenImage";

interface Props {
  token?: string;
  tokenBalance?: number;
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
}

const FurucomboClaimOutput = ({
  token = "",
  tokenBalance = 0,
  setCardCube,
  currentSelection,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-grey-200">{t("flashloans.output")}</div>
          <div className="flex justify-between text-xl">
            <div className="flex items-center">
              <FurucomboTokenImage token={token} />
              <div className="ml-2">{token}</div>
            </div>
            <div>{tokenBalance}</div>
          </div>

          {token === "COMBO" ? (
            <div>
              <div>
                <div className="flex justify-between text-xs text-grey-200 pt-3">
                  <div>{t("flashloans.combo.retroactiveRewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-grey-200 pt-1">
                  <div>{t("flashloans.combo.stakingComboRewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-grey-200 pt-1">
                  <div>{t("flashloans.combo.stakingUniV2Rewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-grey-200 pt-1">
                  <div>{t("flashloans.combo.usageRewards")}</div>
                  <div>
                    <span className="text-white pr-1">{tokenBalance}</span>
                    {token}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <button
        disabled={!tokenBalance}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            amount: tokenBalance,
            token,
          })
        }
        className="mt-2 w-full text-center bg-grey-600 p-2 rounded-b disabled:text-zinc-600 disabled:bg-grey-800"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboClaimOutput;
