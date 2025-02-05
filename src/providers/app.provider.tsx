'use client';

import { createStore, Provider } from 'jotai';

const appStore = createStore();

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={appStore}>{children}</Provider>;
}
