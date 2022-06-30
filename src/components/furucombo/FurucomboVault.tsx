import { useMemo, useState } from "react";
import uuid from "uuid";
import { useTranslation } from "react-i18next";
import { ComboList } from "@/pages/Flashloans";
import FurucomboTokenImage from "./FurucomboTokenImage";

interface Props {
  token?: string;
  setCardCube: (props: ComboList) => void;
  currentSelection: string;
  transactionType?: string;
}

interface FooterTextProps {
  token?: string;
  currentSelection: string;
}

const FooterText = ({ currentSelection, token }: FooterTextProps) => {
  const { t } = useTranslation();

  switch (currentSelection) {
    case "maker:withdraw":
    case "bprotocol:withdraw":
      return (
        <div className="pt-3">
          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.currentTokenLocked", { token })}
            </p>

            <p className="text-sm">
              0 <span className="text-zinc-400">{token}</span>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.ableToWithdraw")}
            </p>

            <p className="text-sm">
              0 <span className="text-zinc-400">{token}</span>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.collateralizationRatio")}
            </p>

            <p className="text-sm text-zinc-400">N/A</p>
          </div>
        </div>
      );

    case "maker:generate":
    case "bprotocol:generate":
      return (
        <div className="pt-3">
          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.availableToGenerate")}
            </p>

            <p className="text-sm">
              0 <span className="text-zinc-400">{token}</span>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.collateralizationRatio")}
            </p>

            <p className="text-sm text-zinc-400">N/A</p>
          </div>
        </div>
      );

    case "maker:pay_back":
    case "bprotocol:pay_back":
      return (
        <div className="pt-3">
          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.outstandingTokenDebt", { token })}
            </p>

            <p className="text-sm">
              0 <span className="text-zinc-400">{token}</span>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.collateralizationRatio")}
            </p>

            <p className="text-sm text-zinc-400">N/A</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="pt-3">
          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.currentTokenLocked", { token })}
            </p>

            <p className="text-sm">
              0 <span className="text-zinc-400">{token}</span>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-xs text-zinc-400">
              {t("flashloans.combo.collateralizationRatio")}
            </p>

            <p className="text-sm text-zinc-400">N/A</p>
          </div>
        </div>
      );
  }
};

const FurucomboVault = ({
  token,
  setCardCube,
  currentSelection,
  transactionType,
}: Props) => {
  const { t } = useTranslation();

  const [vault, setVault] = useState<number>();
  const [amount, setAmount] = useState<number>();

  const vaultHasError = useMemo(() => {
    return Boolean(vault && vault > 0);
  }, [vault]);

  return (
    <div>
      <div className="mt-1 px-2">
        <div className="px-3">
          <div className="text-custom-grey-1">{t("flashloans.vault")}</div>
          <div className="flex items-center">
            <div className="mr-3 text-2xl">#</div>
            <input
              className={`bg-transparent border-b py-2 w-full text-right ${
                vaultHasError ? "border-red-500" : ""
              }`}
              type="number"
              placeholder="number"
              value={vault || ""}
              onChange={(e) => setVault(parseInt(e.target.value))}
              maxLength={40}
            />
          </div>
          {vault && vaultHasError ? (
            <div className="text-right text-xs text-red-500 mt-0.5">
              {t("errors.notVaultOwner")}
            </div>
          ) : null}

          <div className="text-custom-grey-1 mt-4">
            {t(
              transactionType === "input"
                ? "furucombo.input"
                : "furucombo.output"
            )}
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <FurucomboTokenImage token={token} />
              <div className="ml-2 text-xl">{token}</div>
            </div>

            <input
              className="bg-transparent border-b py-2 text-right"
              placeholder="Amount"
              type="number"
              value={amount || ""}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>

          <FooterText token={token} currentSelection={currentSelection} />
        </div>
      </div>

      <button
        disabled={!amount || !vault || vaultHasError}
        onClick={() =>
          setCardCube({
            id: uuid.v4(),
            crn: currentSelection,
            amount,
            token,
            vault,
          })
        }
        className="mt-2 w-full text-center bg-custom-grey-1 p-2 rounded-b disabled:text-zinc-400 disabled:bg-custom-grey-2"
      >
        {t("flashloans.set")}
      </button>
    </div>
  );
};

export default FurucomboVault;
