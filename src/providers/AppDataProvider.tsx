import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

import { NotificationDetail } from '@/types/Notification'

import { localStorageService } from '@/services/localStorageService'

export type AppDataContextType = {
  displayName: string
  setDisplayName: (displayName: string) => void

  isNotificationVisible: boolean
  setIsNotificationVisible: (isVisible: boolean) => void
  notificationDetail: NotificationDetail
  handleShowNotification: (notificationDetail: NotificationDetail) => void

  isDataLoaded: boolean
}

const AppDataContext = createContext<AppDataContextType>({} as AppDataContextType)

type Props = {
  children: ReactNode
}

export const AppDataProvider = ({ children }: Props) => {
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

  const [displayName, _setDisplayName] = useState<string>('')

  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false)
  const [notificationDetail, setNotificationDetail] = useState<NotificationDetail>({
    message: '',
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
    autoHideDuration: 3000,
    severity: 'info',
  })

  // Initialization
  useEffect(() => {
    const initialize = async () => {
      _setDisplayName(localStorageService.getValue('displayName') ?? '')

      setIsDataLoaded(true)
    }

    if (!isDataLoaded) initialize()
  }, [isDataLoaded])

  const setDisplayName = useCallback((displayName: string) => {
    _setDisplayName(displayName)
    localStorageService.setValue('displayName', displayName)
  }, [])

  const handleShowNotification = useCallback((_notificationDetail: NotificationDetail) => {
    setNotificationDetail({
      message: _notificationDetail.message,
      anchorOrigin: _notificationDetail.anchorOrigin ?? { vertical: 'top', horizontal: 'right' },
      autoHideDuration: _notificationDetail.autoHideDuration ?? 3000,
      severity: _notificationDetail.severity ?? 'info',
    })
    setIsNotificationVisible(true)
  }, [])

  return (
    <AppDataContext.Provider
      value={{
        displayName,
        setDisplayName,
        isDataLoaded,
        isNotificationVisible,
        setIsNotificationVisible,
        notificationDetail,
        handleShowNotification,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export const useAppData = () => useContext(AppDataContext)
