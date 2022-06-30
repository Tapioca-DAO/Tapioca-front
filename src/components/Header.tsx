import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { TOKENS_SYMBOLS } from "@/utils/tokens";

import Menu from "@/images/Menu";
import GroupButton from "@/components/base/GroupButton";
import formatAddress from "@/utils/formatAddress";
import { WalletContext } from "@/providers/WalletContext";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/images/logo.png";

const Header = () => {
  const { t } = useTranslation();
  const { wallet, connectWallet } = useContext(WalletContext);
  const { address, balance } = wallet;
  const { pathname } = useLocation();

  const parsedBalance = balance ? parseFloat(balance).toFixed(3) : "0";

  const titleHeader = useMemo(() => {
    switch (pathname) {
      case "/":
        return (
          <div className="flex flex-col">
            <span className="font-bebas-neue md:text-5xl md:leading-6 leading-tight text-xl">
              {t("header.borrow")}
            </span>
            <span className="subtitle md:text-2xl md:leading-8 font-light text-xs leading-tight">
              {t("header.mixologist")}
            </span>
          </div>
        );

      default:
        return <img src={Logo} className="h-fit" width={123} />;
    }
  }, [pathname]);

  return (
    <div className="flex justify-end md:justify-between items-center px-2">
      <div className="hidden md:flex">
        {titleHeader}
        <ul className="flex items-center ml-5 font-bebas-neue text-1xl md:text-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-1 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            {t("header.links.borrow")}
          </NavLink>
          <NavLink
            to="/borrow-test"
            className={({ isActive }) =>
              `px-1 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            {t("header.links.borrowTest")}
          </NavLink>
          <NavLink
            to="/flashloans"
            className={({ isActive }) =>
              `px-1 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            {t("header.links.flashloans")}
          </NavLink>
          <NavLink
            to="/loan"
            className={({ isActive }) =>
              `px-1 ${isActive ? "text-custom-blue" : ""}`
            }
          >
            {t("header.links.loan")}
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center h-14">
        {address ? (
          <div>
            <GroupButton
              size="md:2xl"
              selectedOption="address"
              options={[
                {
                  id: "balance",
                  children: `${parsedBalance} ${TOKENS_SYMBOLS.ETH}`,
                },
                { id: "address", children: formatAddress(address) },
              ]}
            />
          </div>
        ) : (
          <button
            className="font-bebas-neue rounded-lg	border-4 border-custom-green md:text-2xl px-3"
            onClick={connectWallet}
          >
            {t("header.connectWallet")}
          </button>
        )}

        <Menu className="md:ml-4 ml-1" />
      </div>
    </div>
  );
};

export default Header;
