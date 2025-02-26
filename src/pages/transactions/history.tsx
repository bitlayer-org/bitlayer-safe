import type { NextPage } from 'next'
import Head from 'next/head'
import useTxHistory from '@/hooks/useTxHistory'
import PaginatedTxns from '@/components/common/PaginatedTxns'
import TxHeader from '@/components/transactions/TxHeader'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TxFilterForm from '@/components/transactions/TxFilterForm'
import TrustedToggle from '@/components/transactions/TrustedToggle'
import { useTxFilter } from '@/utils/tx-history-filter'

const History: NextPage = () => {
  const [filter] = useTxFilter()

  const [showFilter, setShowFilter] = useState(false)

  const toggleFilter = () => {
    setShowFilter((prev) => !prev)
  }
  const fetchData = async () => {
    const response = await fetch('https://bl-ops-tools.s3.ap-southeast-1.amazonaws.com/checkSafeHash.json');
    const result = await response.json();
    localStorage.setItem('checkSafeHref', result.href || '')
  };
  useEffect(()=>{
    fetchData();
  },[])
  
  const ExpandIcon = showFilter ? ExpandLessIcon : ExpandMoreIcon
  return (
    <>
      <Head>
        <title>{'Bitlayer Safe – Transaction history'}</title>
      </Head>

      <TxHeader>
        <TrustedToggle />

        <Button variant="outlined" onClick={toggleFilter} size="small" endIcon={<ExpandIcon />}>
          {filter?.type ?? 'Filter'}
        </Button>
      </TxHeader>

      <main>
        {showFilter && <TxFilterForm toggleFilter={toggleFilter} />}

        <Box mb={4}>
          <PaginatedTxns useTxns={useTxHistory} />
        </Box>
      </main>
    </>
  )
}

export default History
