import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { WalletProvider } from "@/providers/WalletContext";
import { NotificationProvider } from "@/providers/NotificationContext";
import Header from "@/components/Header";
import Borrow from "@/pages/Borrow";
import BorrowAssets from "@/pages/BorrowAssets";
import Furucombo from "@/pages/Furucombo";
import Loan from "@/pages/Loan";

const App = () => {
  return (
    <WalletProvider>
      <NotificationProvider>
        <BrowserRouter>
          <div className="lg:container flex flex-col md:py-6 md:px-4 py-2 w-full">
            <Header />

            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<Borrow />} />
                <Route path="borrow" element={<BorrowAssets disabled />} />
                <Route
                  path="borrow-test"
                  element={<BorrowAssets main="WETH" collateral="USDC" />}
                />
                <Route path="nocode" element={<Furucombo />} />
                <Route path="loan" element={<Loan />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NotificationProvider>
    </WalletProvider>
  );
};

export default App;
