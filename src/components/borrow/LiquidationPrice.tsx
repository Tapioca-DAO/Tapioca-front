import { useState } from "react";
import Info from "@/components/base/Info";
import ExpandArrow from "@/images/ExpandArrow";
import LiquidationDisclosure from "./LiquidationDisclosure";
import SmallArrow from "@/images/SmallArrow";

interface Props {
  liquidationPrice: string;
  apr: number;
  oracle?: string;
  strategy?: string;
  ltv: number;
  mainAmount: string;
  collateralAmount: string;
  main: string;
  collateral: string;
  positionHealth: string;
}
const LiquidationPrice = ({
  liquidationPrice,
  apr,
  ltv,
  oracle,
  strategy,
  collateralAmount,
  mainAmount,
  main,
  collateral,
  positionHealth,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      hide: !collateralAmount && !mainAmount,
      label: "Position Health",
      value: (
        <div className="flex items-center text-grey-200/80">
          0%
          <SmallArrow />
          <span className="text-grey-100"> {positionHealth}%</span>
        </div>
      ),
    },
    { label: "APR (annualized)", value: `${apr}%` },
    { label: "Loan to Value (LTV)", value: `${ltv}%` },
    {
      label: (
        <div className="flex items-center">
          BentoBox strategy
          <Info message="BentoBox strategies can create yield for your liquidity while it is not lent out." />
        </div>
      ) as JSX.Element,
      value: strategy ? (
        <span className="text-active-blue-100">{strategy}</span>
      ) : (
        "None"
      ),
    },
  ];

  const total = [
    {
      hide: !collateralAmount,
      label: "Total Collateral",
      value: (
        <div className="flex items-center">
          <span>0 {collateral}</span>
          <SmallArrow />
          <span className="text-grey-100 text-ellipsis overflow-hidden max-w-[80px]">
            {collateralAmount}
          </span>
          <span className="ml-0.5 text-grey-100">{collateral}</span>
        </div>
      ),
    },
    {
      hide: !mainAmount,
      label: "Total Borrowed",
      value: (
        <div className="flex items-center">
          <span>0 {main}</span>
          <SmallArrow />
          <span className="text-grey-100 text-ellipsis overflow-hidden max-w-[80px]">
            {mainAmount}
          </span>
          <span className="ml-0.5 text-grey-100">{main}</span>
        </div>
      ),
    },
    { label: "Oracle", value: oracle || "" },
  ];

  return (
    <div>
      <div
        className={[
          "shadow-inner flex flex-col gap-2 py-2 rounded-[14px] px-2 border border-grey-600 transition",
          isOpen ? "bg-navy-400" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-2 pl-1">
          <div className="flex items-center gap-3">
            <div className="text-xs leading-4 font-bold flex gap-2 -ml-1">
              <Info
                message="When the value of your collateral becomes less than the asset you borrow, your position gets liquidated."
                subMessage="When a non-leveraged positions gets liquidated, you lose the collateral but you can keep the borrowed assets"
              />
              Liquidation Price
            </div>
            <div className="text-xs leading-4 font-bold cursor-pointer select-none py-1 rounded rounded-full cursor-pointer hover:text-high-emphesis">
              {liquidationPrice}
            </div>
          </div>
          <ExpandArrow isExpanded={isOpen} expand={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && (
          <div className="px-1 pt-2">
            <LiquidationDisclosure items={items} results={total} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LiquidationPrice;
