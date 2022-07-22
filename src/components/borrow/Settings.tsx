import { useState, useEffect, useRef } from "react";
import SettingsIcon from "@/images/Settings";
import Info from "@/components/base/Info";
import Toggle from "../base/Toggle";

const Settings = () => {
  const settingsElement = useRef();
  const settingsContainer = useRef();

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [config, setConfig] = useState({
    slippage: 0.5,
    transactionDeadline: "",
    exportMode: false,
    disableMultihops: false,
    guard: false,
  });

  useEffect(() => {
    // this function watches for key presses to make sure some behaviors happen
    // if ESC (27) is pressed, we dismiss the dropdown
    const _detectKey = (event: KeyboardEvent) => {
      if (!settingsOpen) return;
      const key = event.which || event.keyCode;
      // esc press, dismiss modal
      if (settingsOpen && key === 27) {
        setSettingsOpen(false);
      }
    };

    window.addEventListener("keydown", _detectKey, false);

    return () => {
      window.removeEventListener("keydown", _detectKey, false);
    };
  });

  return (
    <div>
      <div className="relative">
        <div ref={settingsElement.current}>
          <SettingsIcon onClick={() => setSettingsOpen(!settingsOpen)} />
        </div>
        {settingsOpen && (
          <>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              ref={settingsContainer.current}
              className="z-10 shadow-xl shadow rounded overflow-hidden absolute right-0 bg-navy-400 p-5 pb-14 border-navy-100 border min-w-[300px]"
            >
              <div className="flex flex-col gap-4 mb-4">
                <div className="text-xs font-bold text-grey-200">
                  Transaction Settings
                </div>

                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <div className="text-xs font-bold">
                        Slippage tolerance
                      </div>
                      <Info message="Your transaction will revert if the price changes unfavorably by more than this percentage." />
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-navy-800 rounded border border-navy-100 p-2 py-1">
                        <div className="flex justify-between">
                          <input
                            type="number"
                            className="bg-transparent w-full font-bold focus:outline-none"
                            value={config.slippage}
                            onChange={(e) =>
                              setConfig({
                                ...config,
                                slippage: parseFloat(e.target.value),
                              })
                            }
                          />
                          %
                        </div>
                      </div>
                      <button
                        className="bg-active-blue-100/20 hover:bg-active-blue-100/30 text-active-blue-200 text-sm rounded-full p-2 px-3 font-bold"
                        onClick={() =>
                          setConfig({
                            ...config,
                            slippage: 0.5,
                          })
                        }
                      >
                        Auto
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <div className="text-xs font-bold">
                        Transaction deadline
                      </div>
                      <Info message="Your transaction will revert if it is pending for more than this long." />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        className="bg-navy-800 rounded border border-navy-100 p-2 py-1 max-w-[100px]"
                        placeholder="30"
                        value={config.transactionDeadline}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            transactionDeadline: e.target.value,
                          })
                        }
                      />
                      <div className="text-sm text-grey-200">minutes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-navy-100">
                <div className="text-xs font-bold text-grey-200">
                  Interface Settings
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-xs font-bold">Toggle expert mode</div>
                    <Info message="Bypasses confirmation modals and allows high slippage trades. Use at your own risk." />
                  </div>
                  <Toggle
                    isActive={config.exportMode}
                    toggle={() =>
                      setConfig({ ...config, exportMode: !config.exportMode })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-xs font-bold">Disable multihops</div>
                    <Info message="Restricts swaps to direct pairs only." />
                  </div>
                  <Toggle
                    isActive={config.disableMultihops}
                    toggle={() =>
                      setConfig({
                        ...config,
                        disableMultihops: !config.disableMultihops,
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-xs font-bold">
                      SushiGuard Protector
                    </div>
                    <Info message="SushiGuard protects your trades from MEV, like frontrunning." />
                  </div>
                  <Toggle
                    isActive={config.guard}
                    toggle={() =>
                      setConfig({ ...config, guard: !config.guard })
                    }
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {settingsOpen && (
        <div
          className="absolute z-[8] w-full h-full left-0 top-0"
          onClick={(e) => {
            e.stopPropagation();
            setSettingsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Settings;
