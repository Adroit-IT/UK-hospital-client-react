interface BreadcrumbItem {
  id: string;
  label: string;
  onClick?: () => void;
}

export const generateBreadcrumbs = (...path: number[]): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [];

  for (let i = 0; i < path.length; i++) {
    const id = path.slice(0, i + 1).join(".");
    breadcrumbs.push({ id: id.toString(), label: `Item ${path[i]}` });
  }

  return breadcrumbs;
};
