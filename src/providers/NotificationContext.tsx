import {
  createContext,
  useState,
  ReactElement,
  useEffect,
  useMemo,
} from "react";
import { SmallClose } from "@/images/Close";

interface NotificationProviderProps {
  children: ReactElement;
}

export interface NotificationContextProps {
  useNotification: (message: string) => void;
  Notification: JSX.Element | null;
}

export const NotificationContext = createContext(
  {} as NotificationContextProps
);

export const NotificationConsumer = NotificationContext.Consumer;

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const clear = () => {
    setVisible(false);
    setMessage("");
  };

  useEffect(() => {
    if (visible) setTimeout(clear, 4000);
  }, [visible]);

  const useNotification = (message: string) => {
    setVisible(true);
    setMessage(message);
  };

  const Notification = useMemo(() => {
    if (!visible || !message) return null;
    return (
      <div className="absolute z-[99999] top-3 left-3 max-w-md">
        <div className="bg-red-500 shadow-xl shadow-red-600/60 rounded p-2 overflow-hidden flex justify-between items-center">
          <p className="text-sm text-white pr-4">{message.split(";")[0]}</p>
          <div>
            <SmallClose onClick={clear} />
          </div>
        </div>
      </div>
    );
  }, [visible, message]);

  return (
    <NotificationContext.Provider value={{ useNotification, Notification }}>
      {Notification}
      {children}
    </NotificationContext.Provider>
  );
};
