import { FEATURES } from '@safe-global/safe-gateway-typescript-sdk'
export const bitlayerConfig = {
    "chainId": "1",
    "chainName": "Ethereum Mainnet",
    "shortName": "ETH",
    "description": "Ethereum Mainnet",
    "chainLogoUri": "https://multisign.bitlayer.org/cfg/media/chains/200901/chain_logo.png",
    "l2": true,
    "isTestnet": false,
    "rpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://rpc.ankr.com/eth"
    },
    "safeAppsRpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://rpc.ankr.com/eth"
    },
    "publicRpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://rpc.ankr.com/eth"
    },
    "blockExplorerUriTemplate": {
        "address": "https://etherscan.io/address/{{address}}",
        "txHash": "https://etherscan.io/tx/{{txHash}}",
        "api": "https://api.etherscan.io/v2/api"
    },
    "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18,
        "logoUri": "https://multisign.bitlayer.org/cfg/media/chains/200901/currency_logo.png"
    },
    "transactionService": "https://multisign-fin.trustin.com/txs",
    "vpcTransactionService": "https://multisign-fin.trustin.com/txs",
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