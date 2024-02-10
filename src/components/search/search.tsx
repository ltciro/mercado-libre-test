"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import classes from "./search.module.css";

interface ISearch {
  path: string;
  param: string;
}

export function Search({ path, param }: Readonly<ISearch>) {
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
        />
        <button className={classes.button} type="submit">
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
