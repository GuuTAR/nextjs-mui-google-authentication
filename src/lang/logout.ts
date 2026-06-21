import { LANGUAGE } from '@/enum/global'

export const LOGOUT_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Logout successful!',
  [LANGUAGE.THAI]: 'ออกจากระบบสำเร็จ!',
}

export const LOGOUT_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Logout failed!',
  [LANGUAGE.THAI]: 'ออกจากระบบล้มเหลว!',
}
