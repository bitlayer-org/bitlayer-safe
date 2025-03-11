import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import { GATEWAY_URL } from '@/config/gateway'
import { bitlayerConfig } from '@/bitlayer/bitlayerConfig';

export const getConfigs = async (): Promise<ChainInfo[]> => {
  const data = {	  
    "count": 1,	  
    "next": 1,
    "previous": 1,	
    "results": [	
      bitlayerConfig	
    ]	
  };	
  return (data.results as any) || [];
}
