import { LANGUAGE } from '@/enum/global'

export const LOGIN_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Login successful!',
  [LANGUAGE.THAI]: 'เข้าสู่ระบบสำเร็จ!',
}

export const LOGIN_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Login failed!',
  [LANGUAGE.THAI]: 'เข้าสู่ระบบล้มเหลว!',
}

export const SESSION_CREATE_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Session creation failed!',
  [LANGUAGE.THAI]: 'สร้าง session ล้มเหลว!',
}

export const AUTH_UNAVAILABLE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Auth is not available!',
  [LANGUAGE.THAI]: 'ไม่สามารถใช้งาน Auth ได้!',
}
