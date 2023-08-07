"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Home() {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="target">Harry</span>
      <span className="last">Duong</span>
      {!isConnected && (
        <button
          onClick={() => {
            if (connectors[0]) {
              connect({ connector: connectors[0] });
            }
          }}
          key={connectors[0]?.id}
        >
          Connect wallet
        </button>
      )}

      {isConnected && (
        <>
          <h5>Connected</h5> <button onClick={async () => await disconnect()}>Disconnect</button>
        </>
      )}
    </main>
  );
}
