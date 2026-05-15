import { Alert, Snackbar } from '@mui/material'
import { useCallback } from 'react'

import { useAppData } from '@/providers/AppDataProvider'

export default function Notification() {
  const { isNotificationVisible, setIsNotificationVisible, notificationDetail } = useAppData()

  const handleClose = useCallback(() => {
    setIsNotificationVisible(false)
  }, [setIsNotificationVisible])

  return (
    <Snackbar
      open={isNotificationVisible}
      anchorOrigin={notificationDetail.anchorOrigin}
      autoHideDuration={notificationDetail.autoHideDuration}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={notificationDetail.severity} variant="filled" sx={{ width: '100%' }}>
        {notificationDetail.message}
      </Alert>
    </Snackbar>
  )
}
