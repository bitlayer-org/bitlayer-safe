import useLocalStorage from '@/services/local-storage/useLocalStorage'
import { useEffect } from 'react'

export const LOCAL_CONFIG_KEY = 'safeConfig'

export interface SafeConfig {
  checkSafeHref: string
  noticeStr: string
  showNotice: boolean
}

export const fetchConfig = async (updateFn: (value: SafeConfig) => void) => {
  const defaultConfig = {
    href: 'https://safe-checker.bitlayer.org/analysis',
    checkSafeHref: 'https://safe-checker.bitlayer.org/analysis',
    noticeStr:
      'We will perform system upgrades and maintenance for the Bitlayer Multisig Wallet from 09:00 to 10:00 UTC on June 20, 2025. During this period, the wallet service will be temporarily unavailable. We sincerely apologize for any inconvenience this may cause and appreciate your patience and understanding.',
    showNotice: false,
  }
  try {
    const response = await fetch('https://bl-ops-tools.s3.ap-southeast-1.amazonaws.com/checkSafeHash.json')
    const result = await response.json()
    if (result) {
      updateFn(result)
    }
  } catch (error) {
    updateFn(defaultConfig)
  }
}

function useLocalConfig() {
  const [, setLocalConfig] = useLocalStorage<SafeConfig>(LOCAL_CONFIG_KEY)

  useEffect(() => {
    fetchConfig(setLocalConfig)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useLocalConfig
