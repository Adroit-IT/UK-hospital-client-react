import { Tab } from "@headlessui/react";
import { FC, useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col mb-5 sm:flex-row">
      <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
          <Tab.List className="mt-3 flex flex-wrap justify-center border-b border-white-light dark:border-[#191e3a]">
            {tabs.map((tab, index) => (
              <Tab key={index}>
                {({ selected }) => (
                  <div className="flex-auto text-center !outline-none">
                    <button
                      className={`${
                        selected
                          ? "!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black"
                          : ""
                      } -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab.label}
                    </button>
                  </div>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </Tab.Group>
      <Tab.Panels>
        {tabs.map((tab, index) => (
          <Tab.Panel key={index}>
            <div className={activeTab === index ? "active" : ""}>
              {tab.content}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </div>
  );
};

export default Tabs;
