import { LANGUAGE } from '@/enum/global'

export const EMPTY_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'No tasks yet',
  [LANGUAGE.THAI]: 'ยังไม่มีสิ่งที่ต้องทำ',
}

export const EMPTY_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Add your first task to get started.',
  [LANGUAGE.THAI]: 'เพิ่มสิ่งแรกที่ต้องทำเพื่อเริ่มต้น',
}

export const ITEMS_LEFT: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'tasks left',
  [LANGUAGE.THAI]: 'งานที่เหลือ',
}

export const CLEAR_COMPLETED: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Clear completed',
  [LANGUAGE.THAI]: 'ล้างรายการที่เสร็จแล้ว',
}
