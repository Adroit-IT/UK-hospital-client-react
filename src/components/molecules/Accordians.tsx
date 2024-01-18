import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

interface CollapsibleGroupProps {
  groups: Array<{ title: string; content: React.ReactNode }>;
}

const CollapsibleGroups: React.FC<CollapsibleGroupProps> = ({ groups }) => {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  const toggleCollapsible = (index: number) => {
    setActiveGroup((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mb-5">
      <div className="space-y-2 font-semibold">
        {groups.map((group, index) => (
          <div
            key={index}
            className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]"
          >
            <button
              type="button"
              className={`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]`}
              onClick={() => toggleCollapsible(index)}
            >
              <svg>...</svg>
              {group.title}
              <div className={`ltr:ml-auto rtl:mr-auto rotate-180`}>
                <svg>...</svg>
              </div>
            </button>
            <div>
              <AnimateHeight
                duration={300}
                height={activeGroup === index ? "auto" : 0}
              >
                <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                  {group.content}
                </div>
              </AnimateHeight>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleGroups;
