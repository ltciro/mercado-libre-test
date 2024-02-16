import {
  AppRouterContext,
  AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;
  searchParams?: Partial<URLSearchParams>;
  children: React.ReactNode;
};

export const AppRouterContextProviderMock = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };

  const mockedSearchParams: URLSearchParams = {
    append: jest.fn(),
    delete: jest.fn(),
    entries: jest.fn(),
    forEach: jest.fn(),
    get: jest.fn(),
    getAll: jest.fn(),
    has: jest.fn(),
    keys: jest.fn(),
    set: jest.fn(),
    sort: jest.fn(),
    toString: jest.fn(),
    values: jest.fn(),
    [Symbol.iterator]: jest.fn(),
    size: 0,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      <SearchParamsContext.Provider value={mockedSearchParams}>
        {children}
      </SearchParamsContext.Provider>
    </AppRouterContext.Provider>
  );
};
