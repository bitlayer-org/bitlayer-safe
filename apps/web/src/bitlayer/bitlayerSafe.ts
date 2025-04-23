import { IS_PRODUCTION } from '@/config/constants'
import type { ContractNetworksConfig } from '@safe-global/protocol-kit'
import * as chains from 'viem/chains'

const defaultL2Addresses = {
  multiSendAddress: '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
  safeMasterCopyAddress: '0x3E5c63644E683549055b9Be8653de26E0B4CD36E',
  safeProxyFactoryAddress: '0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2',
  multiSendCallOnlyAddress: '0x40A2aCCbd92BCA938b02010E17A5b8929b49130D',
  fallbackHandlerAddress: '0xf48f2B2d2a534e402487b3ee7C18c33Aec0Fe5e4',
  createCallAddress: '0x7cbB62EaA69F79e6873cD1ecB2392971036cFAa4',
  signMessageLibAddress: '0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2',
  safeSingletonAddress: '0x3E5c63644E683549055b9Be8653de26E0B4CD36E',
  simulateTxAccessorAddress: '0x59AD6735bCd8152B84860Cb256dD9e96b85F69Da',
}
const bitlayerMainnet = {
  id: 200901 as const,
  name: 'Bitlayer Mainnet',
  network: 'Bitlayer Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.bitlayer.org'],
    },
    public: {
      http: ['https://rpc.bitlayer.org'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Explorer',
      url: 'https://www.btrscan.com',
    },
    default: { name: 'Explorer', url: 'https://www.btrscan.com' },
  },
}

const bitlayerTestnet = {
  id: 200810 as const,
  name: 'Bitlayer Testnet',
  network: 'Bitlayer Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.bitlayer.org'],
    },
    public: {
      http: ['https://testnet-rpc.bitlayer.org'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Explorer',
      url: 'https://api-testnet.btrscan.com',
    },
    default: { name: 'Explorer', url: 'https://api-testnet.btrscan.com' },
  },
}

const bitlayer = IS_PRODUCTION ? bitlayerMainnet : bitlayerTestnet

export const contractNetworks: ContractNetworksConfig = {
  [`${bitlayer.id}`]: {
    ...defaultL2Addresses,
    safeWebAuthnSignerFactoryAddress: '0x0000000000000000000000000000000000000000',
    safeWebAuthnSharedSignerAddress: '0x0000000000000000000000000000000000000000',
  },
}

export const allowedNetworks: { [chainId: number]: chains.Chain } = {
  [bitlayer.id]: bitlayer,
}

Object.keys(contractNetworks).map((network) => {
  if (allowedNetworks[+network]) {
    return
  }
  const viemChain = Object.values(chains).find((chain) => chain.id.toString() === network)

  if (!viemChain) {
    return
  }
  allowedNetworks[+network] = viemChain
})
