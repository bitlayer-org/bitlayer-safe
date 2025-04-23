// import { useEffect } from 'react'
// import { useChainsGetChainsV1Query } from '@safe-global/store/gateway/AUTO_GENERATED/chains'
// import { Errors, logError } from '@/services/exceptions'
// import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
// import type { AsyncResult } from '../useAsync'

// const MAX_CHAINS = 40

// export const useLoadChains = () => {
//   const { data, isLoading, error } = useChainsGetChainsV1Query({ cursor: `limit=${MAX_CHAINS}` })

//   // Log errors
//   useEffect(() => {
//     if (error) {
//       logError(Errors._620, error.toString())
//     }
//   }, [error])

//   return [data?.results, error, isLoading] as AsyncResult<ChainInfo[]>
// }

// export default useLoadChains

/* result */
// {
//   "chainId": "11155111",
//   "chainName": "Sepolia",
//   "description": "Ethereum Testnet Sepolia",
//   "chainLogoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/11155111/chain_logo.png",
//   "l2": true,
//   "isTestnet": true,
//   "nativeCurrency": {
//       "name": "Sepolia Ether",
//       "symbol": "ETH",
//       "decimals": 18,
//       "logoUri": "https://safe-transaction-assets.staging.5afe.dev/chains/11155111/currency_logo.png"
//   },
//   "transactionService": "https://safe-transaction-sepolia.staging.5afe.dev",
//   "blockExplorerUriTemplate": {
//       "address": "https://sepolia.etherscan.io/address/{{address}}",
//       "txHash": "https://sepolia.etherscan.io/tx/{{txHash}}",
//       "api": "https://api-sepolia.etherscan.io/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
//   },
//   "beaconChainExplorerUriTemplate": {
//       "publicKey": null
//   },
//   "disabledWallets": [
//       "coinbase"
//   ],
//   "ensRegistryAddress": "0x8FADE66B79cC9f707aB26799354482EB93a5B7dD",
//   "features": [
//       "BRIDGE",
//       "COUNTERFACTUAL",
//       "DEFAULT_TOKENLIST",
//       "DELETE_TX",
//       "DOMAIN_LOOKUP",
//       "EIP1271",
//       "EIP1559",
//       "ERC721",
//       "LENDING",
//       "MASS_PAYOUTS",
//       "MULTI_CHAIN_SAFE_ADD_NETWORK",
//       "MULTI_CHAIN_SAFE_CREATION",
//       "NATIVE_SWAPS",
//       "NATIVE_SWAPS_FEE_ENABLED",
//       "NATIVE_WALLETCONNECT",
//       "NESTED_SAFES",
//       "PROPOSERS",
//       "PUSH_NOTIFICATIONS",
//       "RECOVERY",
//       "RELAYING",
//       "RELAYING_MOBILE",
//       "RENEW_NOTIFICATIONS_TOKEN",
//       "RISK_MITIGATION",
//       "SAFE_APPS",
//       "SAP_BANNER",
//       "SPACES",
//       "SPEED_UP_TX",
//       "SPENDING_LIMIT",
//       "STAKING",
//       "STAKING_BANNER",
//       "TX_NOTES",
//       "TX_SIMULATION",
//       "ZODIAC_ROLES"
//   ],
//   "gasPrice": [],
//   "publicRpcUri": {
//       "authentication": "NO_AUTHENTICATION",
//       "value": "https://rpc2.sepolia.org"
//   },
//   "rpcUri": {
//       "authentication": "API_KEY_PATH",
//       "value": "https://sepolia.infura.io/v3/"
//   },
//   "safeAppsRpcUri": {
//       "authentication": "API_KEY_PATH",
//       "value": "https://sepolia.infura.io/v3/"
//   },
//   "shortName": "sep",
//   "theme": {
//       "textColor": "#ffffff",
//       "backgroundColor": "#B8AAD5"
//   },
//   "balancesProvider": {
//       "chainName": null,
//       "enabled": false
//   },
//   "contractAddresses": {
//       "safeSingletonAddress": null,
//       "safeProxyFactoryAddress": null,
//       "multiSendAddress": null,
//       "multiSendCallOnlyAddress": null,
//       "fallbackHandlerAddress": null,
//       "signMessageLibAddress": null,
//       "createCallAddress": null,
//       "simulateTxAccessorAddress": null,
//       "safeWebAuthnSignerFactoryAddress": null
//   },
//   "recommendedMasterCopyVersion": "1.3.0"
// }
import { useEffect } from 'react'
import { type ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import useAsync, { type AsyncResult } from '../useAsync'
import { Errors, logError } from '@/services/exceptions'
import { DEFAULT_CHAIN } from '@/config/constants'

export const getConfigs = async (): Promise<ChainInfo[]> => {
  const data = {
    count: 1,
    next: 1,
    previous: 1,
    results: [DEFAULT_CHAIN],
  }
  return (data.results as any) || []
}

export const useLoadChains = (): AsyncResult<ChainInfo[]> => {
  const [data, error, loading] = useAsync<ChainInfo[]>(getConfigs, [])

  // Log errors
  useEffect(() => {
    if (error) {
      logError(Errors._620, error.message)
    }
  }, [error])

  return [data, error, loading]
}

export default useLoadChains
