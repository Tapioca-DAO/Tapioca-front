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
  };
  main?: string | null;
}

const CardRight = ({ pair, main }: Props) => {
  const tokenPrice = pair?.tokenPrice || 1;
  const available = pair?.available || 0;
  const borrowed = pair?.borrowed || 0;

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

        <div className="mt-6">Oracle - Witnet</div>
        <div className="flex justify-between mt-3 text-zinc-300">
          <div>Name</div>
          <div className="text-zinc-400">{pair?.oracle}</div>
        </div>

        <div className="mt-6">Tapioca</div>
        <div className="flex justify-between mt-3 text-zinc-300">
          <div>Stratagy</div>
          <div className="text-zinc-400">{pair?.strategy}</div>
        </div>

        {/* <div className="flex justify-between mt-3 text-zinc-300">
          <div>Target Percentage</div>
          <div>75.00%</div>
        </div> */}

        {/* <div className="flex justify-between mt-3 text-zinc-300">
          <div>Current Percentage</div>
          <div>68.27%</div>
        </div> */}

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
