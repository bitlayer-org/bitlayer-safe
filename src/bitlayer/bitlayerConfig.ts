export const bitlayerConfig = {
    "chainId": "200810",
    "chainName": "Bitlayer",
    "shortName": "BTC",
    "description": "Bitlayer Testnet",
    "chainLogoUri": "https://test-multisign.bitlayer.org/cfg/media/chains/200810/chain_logo.png",
    "l2": true,
    "isTestnet": true,
    "rpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://testnet-rpc.bitlayer.org"
    },
    "safeAppsRpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://testnet-rpc.bitlayer.org"
    },
    "publicRpcUri": {
        "authentication": "NO_AUTHENTICATION",
        "value": "https://testnet-rpc.bitlayer.org"
    },
    "blockExplorerUriTemplate": {
        "address": "https://testnet-scan.bitlayer.org/en-us/address/{{address}}",
        "txHash": "https://testnet-scan.bitlayer.org/en-us/tx/{{txHash}}",
        "api": "https://testnet-scan.bitlayer.org/en-us/api?module={{module}}&action={{action}}&address={{address}}&apiKey={{apiKey}}"
    },
    "nativeCurrency": {
        "name": "Bitcoin",
        "symbol": "BTC",
        "decimals": 18,
        "logoUri": "https://test-multisign.bitlayer.org/cfg/media/chains/200810/currency_logo.png"
    },
    "transactionService": "https://test-multisign.bitlayer.org/txs",
    "vpcTransactionService": "https://test-multisign.bitlayer.org/txs",
    "theme": {
        "textColor": "#ffffff",
        "backgroundColor": "#000000"
    },
    "gasPrice": [],
    "ensRegistryAddress": null,
    "recommendedMasterCopyVersion": "1.31.0",
    "disabledWallets": [],
    "features": []
}