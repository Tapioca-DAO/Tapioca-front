import Button from "@/components/base/Button";

interface Props {
  mintWETH: any;
  mintUSDC: any;
  isMintingWeth: boolean;
  isMintingUsdc: boolean;
  isLoadingWeth: boolean;
  isLoadingUsdc: boolean;
}

const MintToken = ({
  mintWETH,
  mintUSDC,
  isMintingWeth,
  isMintingUsdc,
  isLoadingWeth,
  isLoadingUsdc,
}: Props) => (
  <div className="py-2 md:h-20 flex justify-end">
    <div>
      <Button
        isLoading={isLoadingWeth}
        disabled={isMintingWeth}
        onClick={mintWETH}
        buttonColor="purple"
      >
        {isMintingWeth ? (
          "Minting..."
        ) : (
          <span>
            Mint FREE <span className="text-custom-green">WETH</span>
          </span>
        )}
      </Button>

      <Button
        isLoading={isLoadingUsdc}
        disabled={isMintingUsdc}
        onClick={mintUSDC}
        buttonColor="purple"
        customClasses="ml-2"
      >
        {isMintingUsdc ? (
          "Minting..."
        ) : (
          <span>
            Mint FREE <span className="text-custom-green">USDC</span>
          </span>
        )}
      </Button>
    </div>
  </div>
);

export default MintToken;
