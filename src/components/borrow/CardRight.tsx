import Button from "@/components/Button";
import Bubbles from "@/images/Bubbles";
import formatter from "@/utils/dolarFormater";

interface Props {
  pair?: {
    token: string;
    collateral: string;
    tokenPrice: number;
    apr: number;
    oracle: string;
    strategy: string;
    ltv: number;
    borrowed: number;
    available: number;
    liquidation?: number;
    health?: number;
  };
  main?: string | null;
  collateral?: string | null;
  collateralAmount: string;
  mainAmount: string;
}

const SmallArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    width="14"
    className="text-secondary"
  >
    <path
      fill-rule="evenodd"
      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

const CardRight = ({
  pair,
  main,
  collateral,
  collateralAmount,
  mainAmount,
}: Props) => {
  const tokenPrice = pair?.tokenPrice || 1;
  const available = pair?.available || 0;
  const borrowed = pair?.borrowed || 0;
  const liquidation = pair?.liquidation || 0;
  const health = pair?.health || 0;

  const positionHealth =
    !collateralAmount || !mainAmount
      ? 0
      : (
          (health * parseFloat(mainAmount)) /
          parseFloat(collateralAmount)
        ).toFixed(5);

  console.log("main", mainAmount);

  const liquidationPrice =
    !collateralAmount || !mainAmount
      ? "None"
      : `1 ${collateral} = ${(
          (liquidation * parseFloat(mainAmount)) /
          parseFloat(collateralAmount)
        ).toFixed(3)} ${main}`;

  return (
    <div className="basis-1/4 md:bg-custom-grey-4/50 md:rounded-[30px] py-10 md:p-4 md:px-8">
      <div>
        <Bubbles className="px-8" />
      </div>

      <div className="hidden md:flex flex-col mt-4 w-full">
        <div>Market</div>

        <div className="flex justify-between mt-3 text-zinc-300">
          <div>APR</div>
          <div>{pair?.apr || 0}%</div>
        </div>

        <div className="flex justify-between mt-3 text-zinc-300">
          <div>LTV</div>
          <div>{pair?.ltv || 0}%</div>
        </div>

        <div className="flex justify-between mt-3 text-zinc-300">
          <div>Availalble</div>
          <div>
            {parseFloat((available / tokenPrice).toFixed(3))} {main}
          </div>
        </div>

        <div className="flex justify-between mt-3 text-zinc-300">
          <div>Borrowed</div>
          <div>
            {parseFloat((borrowed / tokenPrice).toFixed(3))} {main}
          </div>
        </div>

        <div className="flex justify-between mt-3 gap-3">
          <Button
            buttonColor="pink"
            customClasses="w-full text-md py-0.5 px-0 bg-custom-grey-3"
          >
            accrue
          </Button>
          <Button
            buttonColor="pink"
            customClasses="w-full text-md py-0.5 px-0 bg-custom-grey-3"
          >
            update price
          </Button>
        </div>

        <div className="flex justify-between mt-6 text-zinc-300">
          <div>Oracle</div>
          <div className="text-zinc-400">{pair?.oracle}</div>
        </div>

        <div className="flex justify-between mt-3 text-zinc-300">
          <div>Strategy</div>
          <div className="text-zinc-400">{pair?.strategy}</div>
        </div>

        <div className="text-zinc-300 mt-6">Liquidation Price</div>
        <div className="text-xs text-custom-blue">{liquidationPrice}</div>

        <div className="text-zinc-300 mt-3">Position Health</div>
        <div className="text-xs flex text-custom-blue">
          0%
          <SmallArrow />
          {positionHealth}%
        </div>

        <Button
          buttonColor="pink"
          customClasses="w-full text-md py-0.5 px-0 bg-custom-grey-3 my-3"
        >
          rebalance
        </Button>
      </div>
    </div>
  );
};

export default CardRight;
