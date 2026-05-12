import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

import { localStorageService } from '@/services/localStorageService'

export type AppDataContextType = {
  displayName: string
  setDisplayName: (displayName: string) => void

  isDataLoaded: boolean
}

const AppDataContext = createContext<AppDataContextType>({} as AppDataContextType)

type Props = {
  children: ReactNode
}

export const AppDataProvider = ({ children }: Props) => {
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

  const [displayName, _setDisplayName] = useState<string>('')

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

  return (
    <AppDataContext.Provider
      value={{
        displayName,
        setDisplayName,
        isDataLoaded,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export const useAppData = () => useContext(AppDataContext)
