'use client';

import { createStore, Provider } from 'jotai';
import { ReactNode } from 'react';

type AppProviderType = {
  children: ReactNode;
};

const appStore = createStore();

export default function AppProvider({ children }: AppProviderType) {
  return <Provider store={appStore}>{children}</Provider>;
}
