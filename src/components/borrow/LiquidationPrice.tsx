import { useState } from "react";
import Info from "@/components/base/Info";
import ExpandArrow from "@/images/ExpandArrow";

interface Props {
  liquidationPrice: string;
  apr: number;
  oracle?: string;
  strategy?: string;
  ltv: number;
}
const LiquidationPrice = ({
  liquidationPrice,
  apr,
  ltv,
  oracle,
  strategy,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div>
            <div className="px-1 pt-2" id="headlessui-disclosure-panel-85">
              <div className="flex flex-col divide-y divide-dark-850">
                <div className="flex flex-col gap-1 pb-2">
                  <div className="flex justify-between gap-4">
                    <div className="text-xs leading-4 font-medium currentColor">
                      APR (annualized)
                    </div>
                    <div className="text-xs leading-4 font-medium text-right">
                      {apr}%
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="text-xs leading-4 font-medium currentColor">
                      Loan to Value (LTV)
                    </div>
                    <div className="text-xs leading-4 font-medium text-right">
                      {ltv}%
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="text-xs leading-4 font-medium flex items-center">
                      BentoBox strategy
                      <Info />
                    </div>
                    <div
                      className="text-xs leading-4 font-medium cursor-pointer select-none text-active-blue text-right"
                      id="headlessui-popover-button-91"
                      aria-expanded="false"
                    >
                      {strategy}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                  <div className="flex justify-between gap-4">
                    <div className="text-xs leading-4 font-medium text-secondary">
                      Oracle
                    </div>
                    <div className="text-xs leading-4 font-medium text-right text-secondary">
                      {oracle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiquidationPrice;
