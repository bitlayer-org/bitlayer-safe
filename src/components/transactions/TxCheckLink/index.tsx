import type { ReactElement } from 'react'
import { useState } from 'react'
import { IconButton, Link, SvgIcon } from '@mui/material'
import LinkIcon from '@/public/images/common/link-1.svg'
import { useRouter } from 'next/router'
import Track from '@/components/common/Track'
import { TX_LIST_EVENTS } from '@/services/analytics/events/txList'
import React from 'react'
import { Tooltip } from '@mui/material'


const TxCheckLink = ({ safeHash }: { safeHash: string }): ReactElement => {
  const router = useRouter()
  const safe = (router.query.safe as string) || ''
  const safeAddress = safe.split(':')?.[1]
  const txUrl = `${localStorage.getItem('checkSafeHref')}?safe=${safeAddress}&safeHash=${safeHash}`
  const [showTooltip, setShowTooltip] = useState(false)
  

  return (
    <Track {...TX_LIST_EVENTS.COPY_DEEPLINK}>
      <Tooltip
        title={'Check the transaction'}
        open={showTooltip}
        onOpen={() => setShowTooltip(true)}
        onClose={() => setShowTooltip(false)}
        placement="top"
        TransitionProps={{
          // Otherwise the initialToolTipText is briefly visible during the exit animation
          exit: false,
        }}
      >
        <a href={txUrl} target='_blank' style={{ cursor: 'pointer' }}>
          <IconButton data-testid="check-btn" component={Link} aria-label="Check">
            <SvgIcon component={LinkIcon} inheritViewBox fontSize="small" color="border" />
          </IconButton>
        </a>
      </Tooltip>
    </Track>
  )
}

export default TxCheckLink
