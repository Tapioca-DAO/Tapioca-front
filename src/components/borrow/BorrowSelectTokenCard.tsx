import { useTranslation } from "react-i18next";
import Arrow from "@/images/Arrow";
import GetToken from "@/images/GetToken";

interface Props {
  selected: string;
  isCollateral?: boolean;
  selectToken: (token: string) => void;
  tokenList: string[];
}

const BorrowSelectTokenCard = ({
  selected,
  isCollateral = false,
  selectToken,
  tokenList,
}: Props) => {
  const { t } = useTranslation();
  const index = tokenList.findIndex((item) => item === selected);

  return (
    <div className="w-full rounded-lg	border-4 border-blue-300 flex items-center flex-col bg-grey-900 md:pt-14 ms:px-6 ms:pb-3 p-1">
      <div className="flex items-center">
        <button
          onClick={() => {
            const previusIndex = (index === 0 ? tokenList.length : index) - 1;
            selectToken(tokenList[previusIndex]);
          }}
        >
          <Arrow direction="left" />
        </button>

        <GetToken
          token={selected}
          className="lg:w-40 lg:h-40 md:mx-10 w-20 h-20 mx-6"
          isSelected
        />

        <button
          onClick={() => {
            const previusIndex = index === tokenList.length - 1 ? 0 : index + 1;
            selectToken(tokenList[previusIndex]);
          }}
        >
          <Arrow />
        </button>
      </div>

      <div className="md:text-5xl text-2xl font-bebas-neue text-violet-300">
        {selected}
      </div>

      <div className="flex justify-between">
        {tokenList.map((token) => (
          <div
            key={token}
            className="m-1 cursor-pointer"
            onClick={() => selectToken(token)}
          >
            <GetToken
              token={token}
              isSelected={selected === token}
              className="md:w-14 md:h-14 w-10 h-10"
            />
          </div>
        ))}
      </div>

      <div className="lg:text-5xl text-2xl font-bebas-neue mt-2">
        {t(
          isCollateral
            ? "borrow.selectColleteralToken"
            : "borrow.selectMainToken"
        )}
      </div>

      <div className="italic">
        {t(
          isCollateral ? "borrow.chooseBorrowToken" : "borrow.chooseMainToken"
        )}
      </div>
    </div>
  );
};

export default BorrowSelectTokenCard;
