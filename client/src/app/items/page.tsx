interface ItemsProps {
  searchParams: {
    search: string;
  };
}

export default function Items({ searchParams }: Readonly<ItemsProps>) {
  return <>Search: {searchParams.search}</>;
}
