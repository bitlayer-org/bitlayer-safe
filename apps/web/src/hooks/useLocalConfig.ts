import useLocalStorage from '@/services/local-storage/useLocalStorage'
import { useEffect } from 'react'

export const LOCAL_CONFIG_KEY = 'safeConfig'

export interface SafeConfig {
  checkSafeHref:string
  noticeStr:string
  showNotice:boolean
}


export const fetchConfig = async (updateFn:(value:SafeConfig)=>void) => {
  const response = await fetch('https://bl-ops-tools.s3.ap-southeast-1.amazonaws.com/checkSafeHash.json');
  const result = await response.json();
  if(result){
    updateFn(result)
  }
};

function useLocalConfig() {
  const [,setLocalConfig] = useLocalStorage<SafeConfig>(LOCAL_CONFIG_KEY)

  useEffect(()=>{
    fetchConfig(setLocalConfig);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}

export default useLocalConfig