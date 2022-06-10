import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { TOKENS_SYMBOLS } from "@/utils/tokens";

import Menu from "@/images/Menu";
import GroupButton from "@/components/GroupButton";
import formatAddress from "@/utils/formatAddress";
import { WalletContext } from "@/providers/WalletContext";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { wallet, connectWallet } = useContext(WalletContext);
  const { address, balance } = wallet;
  const { pathname } = useLocation();

  const titleHeader = useMemo(() => {
    switch (pathname) {
      case "/":
        return (
          <div className="flex flex-col">
            <span className="font-bebas-neue md:text-6xl md:leading-10 leading-tight text-xl">
              {t("header.borrow")}
            </span>
            <span className="subtitle md:text-4xl md:leading-8 font-light text-xs leading-tight">
              {t("header.mixologist")}
            </span>
          </div>
        );

      default:
        return <div className="w-[165px] h-[72px]"></div>;
    }
  }, [pathname]);

  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex">
        {titleHeader}
        <ul className="flex items-center ml-5 font-bebas-neue text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-1.5 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            Borrow
          </NavLink>
          <NavLink
            to="/borrow-test"
            className={({ isActive }) =>
              `px-1.5 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            Borrow WETH with USDC
          </NavLink>
          <NavLink
            to="/flashloans"
            className={({ isActive }) =>
              `px-1.5 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            Flashloans
          </NavLink>
          <NavLink
            to="/loan"
            className={({ isActive }) =>
              `px-1.5 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            loan
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center h-14">
        {address ? (
          <>
            <div className="md:hidden">
              <GroupButton
                size="md:2xl"
                selectedOption="address"
                options={[
                  {
                    id: "balance",
                    children: `${parseFloat(balance).toFixed(3)} ${
                      TOKENS_SYMBOLS.ETH
                    }`,
                  },
                  { id: "address", children: formatAddress(address) },
                ]}
              />
            </div>

            <div className="hidden md:inline">
              <GroupButton
                size="md:2xl"
                selectedOption="address"
                options={[
                  {
                    id: "balance",
                    children: `${balance} ${TOKENS_SYMBOLS.ETH}`,
                  },
                  { id: "address", children: formatAddress(address) },
                ]}
              />
            </div>
          </>
        ) : (
          <button
            className="font-bebas-neue rounded-lg	border-4 border-custom-green md:text-2xl px-3"
            onClick={connectWallet}
          >
            {t("header.connectWallet")}
          </button>
        )}

        <Menu className="md:ml-8 ml-1" />
      </div>
    </div>
  );
};

export default Header;
