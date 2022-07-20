import { useState } from "react";
import Info from "@/components/base/Info";
import Toggle from "@/components/base/Toggle";
import Settings from "@/images/Settings";

interface Props {
  liquidationPrice: string;
  collateralAmount: string;
  liquidation: number;
}

const RANGE = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

const LevaragePosition = ({
  liquidationPrice,
  collateralAmount,
  liquidation,
}: Props) => {
  const [leverage, setLeverage] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div
        className={[
          "flex flex-col gap-3 border rounded-[14px] border-gray-600 px-4 p-2 shadow-inner rounded-[14px] transition",
          isOpen ? "bg-navy-400" : "",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm leading-5 font-bold flex items-center">
            Leverage position
            <Info
              message="Leverage your position by swapping the received borrowed WETH for BUSD and use that as extra collateral to borrow more WETH."
              subMessage="Please note that you won't receive any tokens when you use leverage."
            />
          </div>

          <div className="flex items-center gap-2">
            <Toggle
              isActive={isOpen}
              toggle={() => {
                setLeverage(isOpen ? 0 : 0.5);
                setIsOpen(!isOpen);
              }}
            />
            <Settings onClick={() => {}} />
          </div>
        </div>
        {isOpen && (
          <div>
            <div className="flex flex-col">
              <div className="w-full">
                <input
                  onChange={(e: any) => setLeverage(e.target.value / 100)}
                  id="small-range"
                  type="range"
                  min={25}
                  value={leverage * 100}
                  max={200}
                  className="w-full h-1 rounded-full appearance-none cursor-pointer range bg-active-blue/20"
                />

                <div className="flex justify-between">
                  {RANGE.map((value) => (
                    <div className="basis-1/8" key={value}>
                      <span
                        className="text-xxs text-grey-100 hover:text-white cursor-pointer -ml-1.5 relative"
                        onClick={() => setLeverage(value)}
                      >
                        {value}x
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between gap-4 text-xs mt-4">
                <div className="text-grey-100">Position Leverage</div>
                <div
                  className={[
                    "font-bold",
                    leverage < 1
                      ? "text-green-500"
                      : leverage < 1.5
                      ? "text-yellow-500"
                      : "text-red-500",
                  ].join(" ")}
                >
                  {leverage}x
                </div>
              </div>
              <div className="flex justify-between gap-4 text-xs mt-0.5">
                <div className="text-grey-100">Liquidation Price</div>
                <div className="font-bold">{liquidationPrice}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevaragePosition;
