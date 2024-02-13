import classes from "./layout.module.css";

export default function ItemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>{children}</div>
    </main>
  );
}
