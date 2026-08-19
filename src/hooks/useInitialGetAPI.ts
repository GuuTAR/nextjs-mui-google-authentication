import { useEffect } from 'react'

export default function useInitialGetAPI<Data>(
  getData: (() => Promise<Data | undefined>) | undefined,
  onSuccess: (data: Data) => void,
): void {
  useEffect(() => {
    if (!getData) return

    // Prevents a stale response from overwriting state if api changes before this resolves
    let ignore = false

    getData().then((data) => {
      if (ignore || !data) return
      onSuccess(data)
    })

    return () => {
      ignore = true
    }
  }, [getData, onSuccess])
}
