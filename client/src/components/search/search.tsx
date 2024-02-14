"use client";
import { useRouter, useSearchParams } from "next/navigation";

import classes from "./search.module.css";

interface SearchProps {
  path: string;
  param: string;
}

export default function Search({ path, param }: Readonly<SearchProps>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get(param) ?? "";

  const handleSearch = (formData: FormData) => {
    const search = formData.get(param) ?? "";
    if (!search) {
      return;
    }

    router.push(`/${path}?${param}=${search}`);
  };

  return (
    <search className={classes.search}>
      <form className={classes.form} action={handleSearch}>
        <input
          className={classes.input}
          type="search"
          name={param}
          defaultValue={searchParam}
          placeholder="Nunca dejes de buscar"
          autoComplete="off"
        />
        <button
          className={classes.button}
          type="submit"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            role="img"
            aria-label="Buscar"
            className={`${classes.iconSearch} material-symbols-outlined`}
          >
            search
          </div>
        </button>
      </form>
    </search>
  );
}
