import React from "react";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

interface BreadcrumbItem {
  id: string;
  label: string;
  onClick?: () => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={index !== 0 ? 'before:content-["/"] before:px-1.5' : ""}
        >
          {item.onClick ? (
            <button
              className="hover:text-gray-500/70 dark:hover:text-white-dark/70"
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
