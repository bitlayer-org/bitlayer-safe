import Onboard, { type EIP1193Provider, type OnboardAPI } from '@web3-onboard/core'
import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import { getAllWallets } from '@/hooks/wallets/wallets'
import { getRpcServiceUrl } from '@/hooks/wallets/web3'
import type { EnvState } from '@/store/settingsSlice'
import { numberToHex } from '@/utils/hex'
import { BRAND_NAME } from '@/config/constants'

export type ConnectedWallet = {
  label: string
  chainId: string
  address: string
  ens?: string
  provider: EIP1193Provider
}

export const createOnboard = (
  chainInfo: ChainInfo,
  rpcConfig: EnvState['rpc'] | undefined,
): OnboardAPI => {
  const wallets = getAllWallets(chainInfo)

  const chains = [{
    // We cannot use ethers' toBeHex here as we do not want to pad it to an even number of characters.
    id: numberToHex(parseInt(chainInfo.chainId)),
    label: chainInfo.chainName,
    rpcUrl: rpcConfig?.[chainInfo.chainId] || getRpcServiceUrl(chainInfo.rpcUri),
    token: chainInfo.nativeCurrency.symbol,
    color: chainInfo.theme.backgroundColor,
    publicRpcUrl: chainInfo.publicRpcUri.value,
    blockExplorerUrl: new URL(chainInfo.blockExplorerUriTemplate.address).origin,
  }]

  const onboard = Onboard({
    wallets,

    chains,

    accountCenter: {
      mobile: { enabled: false },
      desktop: { enabled: false },
    },

    notify: {
      enabled: false,
    },

    appMetadata: {
      name: BRAND_NAME,
      icon: location.origin + '/images/logo-round.svg',
      description: `Please select a wallet to connect to Safe{Wallet}`,
    },

    connect: {
      removeWhereIsMyWalletWarning: true,
      autoConnectLastWallet: true,
    },
  })

  return onboard
}
