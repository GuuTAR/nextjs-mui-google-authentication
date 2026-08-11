import Image from 'next/image'

import { Avatar, styled } from '@mui/material'

type ProfileAvatarProps = {
  width: number
  height: number
}

export const ProfileAvatarContainer = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})<ProfileAvatarProps>(({ theme, width, height }) => ({
  width,
  height,
  fontSize: Math.round(width / 3),
  backgroundColor: theme.palette.primary.main,
}))

export const RoundImage = styled(Image)(() => ({
  borderRadius: '50%',
}))
