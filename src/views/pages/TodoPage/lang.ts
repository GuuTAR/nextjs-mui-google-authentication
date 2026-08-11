import { LANGUAGE } from '@/enum/global'

export const WELCOME_BACK: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Welcome back',
  [LANGUAGE.THAI]: 'ยินดีต้อนรับกลับ',
}

export const SUBTITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: "Here's what's on your plate today.",
  [LANGUAGE.THAI]: 'นี่คือสิ่งที่คุณต้องทำวันนี้',
}

export const LOGOUT: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Logout',
  [LANGUAGE.THAI]: 'ออกจากระบบ',
}

export const FILTER_ALL: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'All',
  [LANGUAGE.THAI]: 'ทั้งหมด',
}

export const FILTER_ACTIVE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Active',
  [LANGUAGE.THAI]: 'กำลังทำ',
}

export const FILTER_COMPLETED: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Completed',
  [LANGUAGE.THAI]: 'เสร็จแล้ว',
}
