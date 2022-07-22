import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { WalletProvider } from "@/providers/WalletContext";
import { NotificationProvider } from "@/providers/NotificationContext";
import Header from "@/components/Header";
import HelpModal from "@/components/HelpModal";
import Borrow from "@/pages/Borrow";
import BorrowAssets from "@/pages/BorrowAssets";
import Flashloans from "@/pages/Flashloans";
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
                <Route path="borrow" element={<BorrowAssets />} />
                <Route path="flashloans" element={<Flashloans />} />
                <Route path="loan" element={<Loan />} />
              </Route>
            </Routes>

            <HelpModal video="https://youtu.be/PcEzWRRkNcQ" />
          </div>
        </BrowserRouter>
      </NotificationProvider>
    </WalletProvider>
  );
};

export default App;
