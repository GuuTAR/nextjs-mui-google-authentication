import { LANGUAGE } from '@/enum/global'

export const APP_NAME: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Todo List',
  [LANGUAGE.THAI]: 'รายการสิ่งที่ต้องทำ',
}

export const APP_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Note your pending actions',
  [LANGUAGE.THAI]: 'จดบันทึกสิ่งที่ต้องทำของคุณ',
}
