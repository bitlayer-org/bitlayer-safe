import { FEATURES } from '@safe-global/safe-gateway-typescript-sdk'
export const bitlayerConfig = {
  chainId: '1689',
  chainName: 'NERO Mainnet',
  shortName: 'NERO',
  description: 'NERO',
  chainLogoUri: 'https://multisign.bitlayer.org/cfg/media/chains/200901/chain_logo.png',
  l2: true,
  isTestnet: true,
  rpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.nerochain.io',
  },
  safeAppsRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.nerochain.io',
  },
  publicRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.nerochain.io',
  },
  blockExplorerUriTemplate: {
    address: 'https://neroscan.io/address/{{address}}',
    txHash: 'https://neroscan.io/tx/{{txHash}}',
    api: 'https://api.neroscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}',
  },
  nativeCurrency: {
    name: 'NERO',
    symbol: 'NERO',
    decimals: 18,
    logoUri: 'https://multisign.bitlayer.org/cfg/media/chains/200901/chain_logo.png',
  },
  transactionService: 'https://multisign.nerochain.io/txs',
  vpcTransactionService: 'https://multisign.nerochain.io/txs',
  theme: {
    textColor: '#ffffff',
    backgroundColor: '#000000',
  },
  gasPrice: [],
  ensRegistryAddress: null,
  recommendedMasterCopyVersion: '1.31.0',
  disabledWallets: [],
  features: [
    FEATURES.CONTRACT_INTERACTION,
    FEATURES.DOMAIN_LOOKUP,
    FEATURES.EIP1559,
    FEATURES.ERC721,
    FEATURES.SAFE_APPS,
    FEATURES.SAFE_TX_GAS_OPTIONAL,
    FEATURES.SPENDING_LIMIT,
    FEATURES.TX_SIMULATION,
  ],
}
