import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { TOKENS_SYMBOLS } from "@/utils/tokens";

import Menu from "@/images/Menu";
import GroupButton from "@/components/base/GroupButton";
import formatAddress from "@/utils/formatAddress";
import { WalletContext } from "@/providers/WalletContext";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/images/logo.png";
import Button from "@/components/base/Button";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const { wallet, connectWallet } = useContext(WalletContext);
  const { address, balance } = wallet;
  const { pathname } = useLocation();

  const parsedBalance = balance ? parseFloat(balance).toFixed(3) : "0";

  const titleHeader = <img src={Logo} className="h-8" />;

  const headerItems = (
    <>
      <NavLink
        onClick={() => setOpen(false)}
        to="/"
        className={({ isActive }) => `px-1 ${isActive ? "text-blue-300" : ""}`}
      >
        {t("header.links.borrow")}
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/borrow-test"
        className={({ isActive }) => `px-1 ${isActive ? "text-blue-300" : ""}`}
      >
        {t("header.links.borrowTest")}
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/flashloans"
        className={({ isActive }) => `px-1 ${isActive ? "text-blue-300" : ""}`}
      >
        {t("header.links.flashloans")}
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/loan"
        className={({ isActive }) => `px-1 ${isActive ? "text-blue-300" : ""}`}
      >
        {t("header.links.loan")}
      </NavLink>
    </>
  );

  return (
    <div className="flex justify-end md:justify-between items-center px-2">
      <div className="hidden md:flex">
        {titleHeader}
        <ul className="flex items-center ml-5 font-bebas-neue text-1xl md:text-2xl">
          {headerItems}
        </ul>
      </div>

      <div className="md:hidden">
        {open ? (
          <div
            className="flex items-center justify-center overflow-auto fixed top-0 left-0 bottom-0 right-0 z-[99999] bg-zinc-900/90"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
            }}
          >
            <div className="absolute px-2 top-2 shadow-lg w-full">
              <div className="bg-grey-800 rounded p-4">
                <div className="flex items-center justify-between mb-7">
                  {titleHeader}
                  <div>
                    <svg
                      viewBox="0 0 10 10"
                      className="w-2.5 h-2.5 cursor-pointer"
                      aria-hidden="true"
                      onClick={() => setOpen(false)}
                    >
                      <path
                        d="M0 0L10 10M10 0L0 10"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <ul className="flex flex-col font-bebas-neue text-2xl px-1">
                  {headerItems}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
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
          <Button buttonColor="green" buttonSize="2xl" onClick={connectWallet}>
            {t("header.connectWallet")}
          </Button>
        )}

        <Menu
          className="md:ml-4 ml-1 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
    </div>
  );
};

export default Header;
