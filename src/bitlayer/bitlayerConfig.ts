import { FEATURES } from '@safe-global/safe-gateway-typescript-sdk'
export const bitlayerConfig = {
    "chainId": "200901",
    "chainName": "Bitlayer Mainnet",
    "shortName": "BTR",
    "description": "Bitlayer Mainnet",
    "chainLogoUri": "https://test-multisign.bitlayer.org/cfg/media/chains/200810/chain_logo.png",
    "l2": true,
    "isTestnet": false,
    "rpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://mainnet-rpc.bitlayer.org"
    },
    "safeAppsRpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://mainnet-rpc.bitlayer.org"
    },
    "publicRpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://mainnet-rpc.bitlayer.org"
    },
    "blockExplorerUriTemplate": {
        "address": "https://www.btrscan.com/address/{{address}}",
        "txHash": "https://www.btrscan.com/tx/{{txHash}}",
        "api": "https://www.btrscan.com/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
    },
    "nativeCurrency": {
        "name": "Bitcoin",
        "symbol": "BTC",
        "decimals": 18,
        "logoUri": "https://test-multisign.bitlayer.org/cfg/media/chains/200810/currency_logo.png"
    },
    "transactionService": "https://multisign.bitlayer.org/txs",
    "vpcTransactionService": "https://multisign.bitlayer.org/txs",
    "theme": {
        "textColor": "#ffffff",
        "backgroundColor": "#000000"
    },
    "gasPrice": [],
    "ensRegistryAddress": null,
    "recommendedMasterCopyVersion": "1.31.0",
    "disabledWallets": [],
    "features": [
        FEATURES.CONTRACT_INTERACTION,
        FEATURES.DOMAIN_LOOKUP,
        FEATURES.EIP1559,
        FEATURES.ERC721,
        FEATURES.SAFE_APPS,
        FEATURES.SAFE_TX_GAS_OPTIONAL,
        FEATURES.SPENDING_LIMIT,
    ],
}