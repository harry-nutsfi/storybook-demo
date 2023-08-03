"use client";

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import {
  arbitrumGoerli,
  baseGoerli,
  goerli,
  optimismGoerli,
} from "wagmi/chains";
import { useEffect, useState } from "react";

const { chains, publicClient } = configureChains(
  [baseGoerli, goerli, optimismGoerli, arbitrumGoerli],
  [
    infuraProvider({
      apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY as string,
    }),
    publicProvider(),
  ]
);

/** TODO add Wallet Connect */
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Pike Finance",
      },
    }),
    new LedgerConnector({ chains, options: { projectId: "" } }),
  ],
  publicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={config}>
      {mounted && <main>{children}</main>}
    </WagmiConfig>
  );
}