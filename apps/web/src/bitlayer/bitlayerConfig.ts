import { FEATURES } from '@/utils/chains'

const bitlayerIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjYgMTNjMC03LjE4LTUuODItMTMtMTMtMTNTMCA1LjgyIDAgMTNzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzeiIgZmlsbD0iI0UzNkUxQiIvPjxwYXRoIGQ9Ik00LjgyNyA1Ljc4MnYzLjEwMWMuNjg4LS4zNyAxLjM3LS4zMjUgMi4wNDctLjQwMVY1LjQxN2MtLjc0MyAwLTEuMzU5LjAwNi0yLjA0Ny4zNjV6bTYuMDAxLjM0M2ExMy40NjIgMTMuNDYyIDAgMCAwLTEuOTU0LS41Nzh2My4wM2MuNjU2LjEyMSAxLjMwNy4zMTcgMS45NTQuNTQzVjYuMTI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik04Ljg3NCAxMS42MDVWOC41NzZhNi43NzggNi43NzggMCAwIDAtMi0uMDk0djMuMDY1YTYuNzU3IDYuNzU3IDAgMCAxIDIgLjA1OHptLTQuMDQ3LjM4djMuMWMuNjg4LS4zOTUgMS4zNy0uMzc0IDIuMDQ3LS40NzN2LTMuMDY1Yy0uNy4wNTktMS4zNTkuMDU0LTIuMDQ3LjQzOHptNC4wNDctLjM4djMuMDNhMTIuOTYgMTIuOTYgMCAwIDEgMS45NTQuNDc1di0yLjk5NWMtLjY0Ni0uMjE1LTEuMjk4LS40LTEuOTU0LS41MXptLTIgMy4wMDd2My4wNjVhNi43NiA2Ljc2IDAgMCAxIDItLjAxMnYtMy4wM2E2Ljc1OSA2Ljc1OSAwIDAgMC0yLS4wMjN6bTEzLjAzLTEuMzE4Yy43Ni0uNjQ4IDEuMTg5LTEuNjkgMS4xODktMi43NjMgMC0xLjY2MS0xLTIuMzQxLTMuMDgtMi41NTJWNi41M2ExMi45NCAxMi45NCAwIDAgMS0xLjMzNi0uMTQ0djEuNDQ2YTE4LjI3IDE4LjI3IDAgMCAxLTEuMjYtLjIzNlY2LjE0YTI5LjAzNSAyOS4wMzUgMCAwIDEtMS4zNzgtLjM1OHYxLjQ3YTU5LjU3IDU5LjU3IDAgMCAxLTEuMy0uMzc3djIuOTYxYy0uNjMzLS4yMzgtMS4yNy0uNDkyLTEuOTEtLjcxNnYyLjk5NWMuNjQuMjEzIDEuMjc3LjQ1NSAxLjkxLjY4M3YyLjk2Yy0uNjMzLS4yMTUtMS4yNy0uNDQ2LTEuOTEtLjY0OHYyLjk5NWMuNjQuMTkgMS4yNzcuNDEgMS45MS42MTUuNDM1LjEuODY4LjE5NiAxLjMuMjg0djEuNDdjLjQ2Mi4wOS45MjEuMTcgMS4zNzkuMjM1di0xLjQ1N2MuNDIyLjA2My44NDEuMTE0IDEuMjYuMTQ3djEuNDQ1Yy40NDcuMDMxLjg5Mi4wNDIgMS4zMzQuMDI2di0xLjQzNmMyLjMwOC0uMTMgMy41MDctMS45OTEgMy41MDctMy44NDggMC0xLjM3LS42MTUtMi4wMzUtMS42MTUtMi4yOTJ6TTE1LjQyIDkuOThjLjQyMS4wODcuODQuMTYgMS4yNTYuMjE3YTE0LjA3MiAxNC4wNzIgMCAwIDAgLjY2LjA3NWwuMDI2LjAwNC4wOTIuMDEzLjAwNy4wMDEuMDk3LjAxOC4wMTYuMDA0Yy4wMy4wMDYuMDYuMDEyLjA4OC4wMmguMDAzYy4wMzIuMDA4LjA2My4wMTcuMDkyLjAyNmExLjQ4NSAxLjQ4NSAwIDAgMSAuMjU0LjEwMWMuMzUuMTgxLjUyOC40OS41MjguOTQ4IDAgLjQ2Ni0uMTc4Ljc5Ny0uNTI4Ljk2NWExLjE1NSAxLjE1NSAwIDAgMS0uMjQ4LjA4NGMtLjAwMiAwLS4wMDQgMC0uMDA2LjAwMi0uMDMuMDA2LS4wNi4wMTItLjA5Mi4wMTZoLS4wMDNhMS40MjQgMS40MjQgMCAwIDEtLjA4OC4wMWwtLjAxNy4wMDJhMS41ODMgMS41ODMgMCAwIDEtLjA5Ny4wMDVoLS4wMDZhMi42MSAyLjYxIDAgMCAxLS4yMjItLjAwNiAxNSAxNSAwIDAgMS0uNTU3LS4wNTYgMTguNTcgMTguNTcgMCAwIDEtMS4yNTUtLjJWOS45Nzh6bTIuNTkgNy4wODdhMS44NjYgMS44NjYgMCAwIDEtLjE2OS4wMmwtLjAzLjAwMmExLjY1MiAxLjY1MiAwIDAgMS0uMDYzLjAwMmwtLjAyOC4wMDFoLS4wOTNhMTMuMzA0IDEzLjMwNCAwIDAgMS0uOTUxLS4wNTUgMTcuNzYgMTcuNzYgMCAwIDEtMS4yNTYtLjE2NXYtMi4zNjRjLjQyMS4wNzYuODQuMTM4IDEuMjU2LjE4M2ExMy4xNTEgMTMuMTUxIDAgMCAwIDEuMDQ0LjA3M2wuMDI4LjAwMi4wNjQuMDA1LjAyOS4wMDIuMDYyLjAwNy4wMjUuMDAyLjA4My4wMTJjLjYzNi4wOTguOTY4LjQyNC45NjggMS4wODcgMCAuNjU3LS4zMzIgMS4wNzYtLjk2OCAxLjE4NnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4='

export const bitlayerConfig = {
  gateway: 'https://safe.bitlayer.org/cgw',
  balancesProvider: {
    chainName: 'bitlayer',
    enabled: false,
  },
  chainId: '200901',
  chainName: 'Bitlayer Mainnet',
  shortName: 'BTR',
  description: 'Bitlayer Mainnet',
  chainLogoUri: bitlayerIcon,
  l2: true,
  isTestnet: false,
  rpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.bitlayer.org',
  },
  safeAppsRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.bitlayer.org',
  },
  publicRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.bitlayer.org',
  },
  blockExplorerUriTemplate: {
    address: 'https://www.btrscan.com/address/{{address}}',
    txHash: 'https://www.btrscan.com/tx/{{txHash}}',
    api: 'https://api.btrscan.com/scan/api',
  },
  beaconChainExplorerUriTemplate: {
    publicKey: null,
  },
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 18,
    logoUri: 'https://multisign.bitlayer.org/cfg/media/chains/200901/currency_logo.png',
  },
  transactionService: 'https://safe.bitlayer.org/txs',
  vpcTransactionService: 'https://safe.bitlayer.org/txs',
  theme: {
    textColor: '#ffffff',
    backgroundColor: '#000000',
  },
  gasPrice: [],
  ensRegistryAddress: null,
  recommendedMasterCopyVersion: '1.4.1',
  contractAddresses: {
    safeSingletonAddress: null,
    safeProxyFactoryAddress: null,
    multiSendAddress: null,
    multiSendCallOnlyAddress: null,
    fallbackHandlerAddress: null,
    signMessageLibAddress: null,
    createCallAddress: null,
    simulateTxAccessorAddress: null,
    safeWebAuthnSignerFactoryAddress: null,
  },
  disabledWallets: [],
  features: [
    // FEATURES.CONTRACT_INTERACTION,
    FEATURES.DOMAIN_LOOKUP,
    FEATURES.EIP1559,
    FEATURES.ERC721,
    FEATURES.SAFE_APPS,
    FEATURES.SAFE_TX_GAS_OPTIONAL,
    FEATURES.SPENDING_LIMIT,
    FEATURES.MULTI_CHAIN_SAFE_CREATION,
    FEATURES.COUNTERFACTUAL,
    FEATURES.NATIVE_WALLETCONNECT,
  ],
  newsafe: true,
}

export const bitlayerTestnetConfig = {
  gateway: 'https://testnet-multisign.bitlayer.org/cgw',
  balancesProvider: {
    chainName: 'bitlayer-test',
    enabled: false,
  },
  chainId: '200810',
  chainName: 'Bitlayer Testnet',
  shortName: 'BTR',
  description: 'Bitlayer Testnet',
  chainLogoUri: bitlayerIcon,
  l2: true,
  isTestnet: true,
  rpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://testnet-rpc.bitlayer.org',
  },
  safeAppsRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://testnet-rpc.bitlayer.org',
  },
  publicRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://testnet-rpc.bitlayer.org',
  },
  blockExplorerUriTemplate: {
    address: 'https://testnet.btrscan.com/address/{{address}}',
    txHash: 'https://testnet.btrscan.com/tx/{{txHash}}',
    api: 'https://api-testnet.btrscan.com/scan/api',
  },
  nativeCurrency: {
    name: 'Bitcoin',
    symbol: 'BTC',
    decimals: 18,
    logoUri:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0idGV4dC1bI0Y3OTMxQV0gc2l6ZS0zLjUiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMuOTggOS4wMmMuMTY1LTEuMDUtLjY4Mi0xLjYxNS0xLjg0LTEuOTkybC4zNzYtMS40MjQtLjkxOC0uMjE2LS4zNjYgMS4zODZjLS4yNC0uMDU2LS40ODktLjExLS43MzUtLjE2M2wuMzY5LTEuMzk1TDkuOTQ5IDVsLS4zNzYgMS40MjNjLS4yLS4wNDMtLjM5Ni0uMDg1LS41ODYtLjEzdi0uMDA1TDcuNzI0IDUuOTlsLS4yNDQuOTI1cy42OC4xNDguNjY2LjE1N2MuMzcyLjA4Ny40MzkuMzIuNDI4LjUwNGwtLjQyOSAxLjYyMWEuNzc3Ljc3NyAwIDAgMSAuMDk2LjAzIDEuNzQ2IDEuNzQ2IDAgMCAwLS4wOTctLjAyM2wtLjYgMi4yNzFjLS4wNDYuMTA3LS4xNi4yNjctLjQyLjIwNi4wMDkuMDEzLS42NjctLjE1Ny0uNjY3LS4xNTdMNiAxMi41MTZsMS4xOTQuMjhjLjIyMi4wNTMuNDQuMTA4LjY1NC4xNmwtLjM4IDEuNDQuOTE3LjIxNi4zNzYtMS40MjVjLjI1LjA2NC40OTMuMTI0LjczMS4xOGwtLjM3NSAxLjQxNy45MTguMjE2LjM4LTEuNDM3YzEuNTY0LjI4IDIuNzQuMTY3IDMuMjM2LTEuMTcuMzk5LTEuMDc1LS4wMi0xLjY5Ni0uODQzLTIuMS42LS4xMzEgMS4wNS0uNTA0IDEuMTcxLTEuMjczem0tMi4wOTcgMi43NzZjLS4yODQgMS4wNzYtMi4yMDIuNDk0LTIuODI0LjM0OWwuNTA0LTEuOTA4Yy42MjIuMTQ3IDIuNjE2LjQzNyAyLjMyIDEuNTU5em0uMjg0LTIuNzkxYy0uMjYuOTc4LTEuODU2LjQ4MS0yLjM3NC4zNTlsLjQ1Ny0xLjczYy41MTguMTIyIDIuMTg2LjM1IDEuOTE2IDEuMzd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+',
  },
  beaconChainExplorerUriTemplate: {
    publicKey: null,
  },
  transactionService: 'https://testnet-multisign.bitlayer.org/txs',
  vpcTransactionService: 'https://testnet-multisign.bitlayer.org/txs',
  theme: {
    textColor: '#ffffff',
    backgroundColor: '#000000',
  },
  gasPrice: [],
  ensRegistryAddress: null,
  recommendedMasterCopyVersion: '1.4.1',
  contractAddresses: {
    safeSingletonAddress: null,
    safeProxyFactoryAddress: null,
    multiSendAddress: null,
    multiSendCallOnlyAddress: null,
    fallbackHandlerAddress: null,
    signMessageLibAddress: null,
    createCallAddress: null,
    simulateTxAccessorAddress: null,
    safeWebAuthnSignerFactoryAddress: null,
  },
  disabledWallets: [],
  features: [
    // FEATURES.CONTRACT_INTERACTION,
    FEATURES.DOMAIN_LOOKUP,
    FEATURES.EIP1559,
    FEATURES.ERC721,
    FEATURES.SAFE_APPS,
    FEATURES.SAFE_TX_GAS_OPTIONAL,
    FEATURES.SPENDING_LIMIT,
    FEATURES.MULTI_CHAIN_SAFE_CREATION,
    FEATURES.COUNTERFACTUAL,
    FEATURES.NATIVE_WALLETCONNECT,
  ],
  newsafe: true,
}
