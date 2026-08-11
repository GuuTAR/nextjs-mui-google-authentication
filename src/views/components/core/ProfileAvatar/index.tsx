import { useMemo } from 'react'

import { utilService } from '@/services/utilService'

import { useUserData } from '@/providers/UserDataProvider'

import * as Styles from './style'

type Props = {
  width: number
  height: number
}

export default function ProfileAvatar({ width, height }: Props) {
  const { userDisplayName, userEmail, userPhotoURL } = useUserData()

  const userInitials: string = useMemo(
    () => utilService.getDisplayNameInitials(userDisplayName, userEmail),
    [userDisplayName, userEmail],
  )

  return (
    <Styles.ProfileAvatarContainer width={width} height={height}>
      {userPhotoURL ? (
        <Styles.RoundImage src={userPhotoURL} alt="Profile" width={width} height={height} loading="eager" />
      ) : (
        userInitials
      )}
    </Styles.ProfileAvatarContainer>
  )
}
