import { FEATURES } from '@safe-global/safe-gateway-typescript-sdk'
export const bitlayerConfig = {
  chainId: '8329',
  chainName: 'Lorenzo',
  shortName: 'LRZ',
  description: 'Lorenzo',
  chainLogoUri: 'https://lorenzo-multisign.bitlayer.org/cfg/media/chains/8329/chain_logo.png',
  l2: true,
  isTestnet: false,
  rpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.lorenzo-protocol.xyz',
  },
  safeAppsRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.lorenzo-protocol.xyz',
  },
  publicRpcUri: {
    authentication: 'NO_AUTHENTICATION',
    value: 'https://rpc.lorenzo-protocol.xyz',
  },
  blockExplorerUriTemplate: {
    address: 'https://scan.lorenzo-protocol.xyz/address/{{address}}',
    txHash: 'https://scan.lorenzo-protocol.xyz/tx/{{txHash}}',
    api: 'https://api-testnet.btrscan.com/scan/api',
  },
  nativeCurrency: {
    name: 'stBTC',
    symbol: 'stBTC',
    decimals: 18,
    logoUri: 'https://lorenzo-multisign.bitlayer.org/cfg/media/chains/8329/chain_logo.png',
  },
  transactionService: 'https://lorenzo-multisign.bitlayer.org/txs',
  vpcTransactionService: 'https://lorenzo-multisign.bitlayer.org/txs',
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