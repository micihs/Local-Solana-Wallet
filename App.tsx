import { StatusBar } from "expo-status-bar";
import React from "react";
import "./global";
import "react-native-url-polyfill/auto";
import { Provider as LedgerProvider } from "react-native-paper";
import { theme } from "./core/theme";
import useCachedResources from "./hooks/useCachedResources";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
        <LedgerProvider theme={theme}>
          <Navigation />
          <StatusBar />
        </LedgerProvider>
      </StoreProvider>
    );
  }
}