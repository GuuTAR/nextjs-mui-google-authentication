import HomeIcon from '@mui/icons-material/Home'

import { AppMenu, AppMenuMobile } from '@/types/AppMenu'
import { SupportLang } from '@/types/SupportLang'
import { AppMenuType } from '@/enum/AppMenu'
import { LANGUAGE } from '@/enum/global'

import ProfileAvatar from '@/views/components/core/ProfileAvatar'

export const APP_MENU_SIZE: number = 250
export const NAVBAR_HEIGHT: number = 64

export const BOTTOM_NAVBAR_HEIGHT: number = 56

export const LANGUAGE_OPTIONS: SupportLang[] = [
  { value: LANGUAGE.ENGLISH, label: 'English' },
  { value: LANGUAGE.THAI, label: 'ไทย' },
]

export const APP_MENU_DATA_DESKTOP: AppMenu[] = [
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Home', [LANGUAGE.THAI]: 'หน้าหลัก' },
    path: '/',
    icon: <HomeIcon />,
  },
]

export const APP_MENU_DATA_MOBILE: AppMenuMobile[] = [
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Home', [LANGUAGE.THAI]: 'หน้าหลัก' },
    path: '/',
    icon: <HomeIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Profile', [LANGUAGE.THAI]: 'โปรไฟล์' },
    path: '/profile',
    icon: <ProfileAvatar width={24} height={24} />,
  },
]
