import { useEffect, useMemo, useState } from "react";
import { FURUCOMBO_CUBES } from "@/utils/constants";

import Close from "@/images/Close";
import GradientButton from "@/components/furucombo/GradientButton";
import SearchIcon from "@/images/SearchIcon";
import Input from "@/components/Input";

interface Props {
  closeModal: () => void;
  selectCube: (id: string) => void;
}

const NewCubeModal = ({ closeModal, selectCube }: Props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // if ESC (27) is pressed, we dismiss the dropdown
    const _detectKey = (event: KeyboardEvent) => {
      const key = event.which || event.keyCode;
      if (key === 27) {
        closeModal();
      }
    };

    window.addEventListener("keydown", _detectKey, false);

    return () => {
      window.removeEventListener("keydown", _detectKey, false);
    };
  });

  const filteredCubes = useMemo(() => {
    return search
      ? FURUCOMBO_CUBES.reduce<any[]>((acc, cube: any) => {
          if (
            cube.title.toLowerCase().includes(search.toLowerCase()) ||
            cube.defiName.toLowerCase().includes(search.toLowerCase())
          ) {
            return [...acc, cube];
          }

          const filteredCube = cube.options.filter(
            ({ featureName, title }: any) =>
              title.toLowerCase().includes(search.toLowerCase()) ||
              featureName.toLowerCase().includes(search.toLowerCase())
          );

          if (filteredCube.length) {
            return [...acc, { ...cube, options: filteredCube }];
          }

          return acc;
        }, [])
      : FURUCOMBO_CUBES;
  }, [search, FURUCOMBO_CUBES]);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0">
        <div className="fixed inset-0 bg-black opacity-90 transition-opacity" />

        <div className="overflow-y-auto h-[85vh] md:h-full relative inline-block overflow-hidden w-full h-full">
          <div className="md:p-4 p-0.5">
            <div className="flex justify-between">
              <Close onClick={closeModal} />
              <div>New Cube</div>
              <div />
            </div>

            <div className="w-full flex justify-center">
              <div className="flex flex-col items-center mt-1 md:w-2/3 w-full">
                <Input
                  customLeftItem={<SearchIcon />}
                  placeholder="Search defi or action"
                  customClasses="md:w-[600px] px-2 mb-6"
                  color="purple"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="w-full md:w-[600px]">
                  {filteredCubes.map(({ title, defiName, options, colors }) => {
                    return (
                      <div key={`${defiName}`} className="mb-6">
                        <div>{title}</div>
                        <div className="md:flex md:flex-wrap">
                          {options.map(({ featureName, title }: any) => (
                            <div
                              className="md:basis-1/3 md:pr-4"
                              key={`${defiName}-${featureName}`}
                            >
                              <GradientButton
                                id={featureName}
                                onClick={() => {
                                  selectCube(`${defiName}:${featureName}`);
                                  closeModal();
                                }}
                                colors={colors}
                                title={title}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCubeModal;
