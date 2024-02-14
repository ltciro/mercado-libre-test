import classes from "./breadcrumb.module.css";

interface BreadCrumbProps {
  breadcrumbs: string[];
}
export default function Breadcrumb({ breadcrumbs }: Readonly<BreadCrumbProps>) {
  return (
    <ul className={classes.breadcrumb}>
      {breadcrumbs.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
}
