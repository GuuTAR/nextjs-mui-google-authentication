import { AlertColor, SnackbarOrigin } from '@mui/material'

export type NotificationDetail = {
  message: string
  anchorOrigin?: SnackbarOrigin
  autoHideDuration?: number
  severity?: AlertColor
}
