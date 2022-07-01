import { useTranslation } from "react-i18next";
import Miami from "@/images/Miami";

const CardLeft = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="basis-1/4 bg-grey-950 rounded-[30px] hidden md:flex flex-col justify-between">
        <div className="p-8">
          <div className="uppercase text-5xl font-bebas-neue leading-10">
            {t("borrow.borrowAssets.addCollateral")}
          </div>
          <div className="pt-4">
            {t("borrow.borrowAssets.gainExposureToTokens")}
          </div>
        </div>

        <div className="h-1/2">
          <Miami className="rounded-[30px]" />
        </div>
      </div>

      <div className="md:hidden border-b-4 border-green-300 px-4">
        <div className="uppercase text-2xl font-bebas-neue leading-10">
          {t("borrow.borrowAssets.addCollateral_mobile")}
        </div>
      </div>
    </>
  );
};

export default CardLeft;
