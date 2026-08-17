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

export const CREATE_TODO_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Todo created successfully!',
  [LANGUAGE.THAI]: 'สร้างงานสำเร็จ!',
}

export const CREATE_TODO_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to create todo.',
  [LANGUAGE.THAI]: 'สร้างงานไม่สำเร็จ!',
}

export const RESET_TODOS_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'All todos have been reset successfully!',
  [LANGUAGE.THAI]: 'รีเซ็ตงานทั้งหมดสำเร็จ!',
}

export const RESET_TODOS_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to reset todos.',
  [LANGUAGE.THAI]: 'รีเซ็ตงานทั้งหมดไม่สำเร็จ!',
}

export const DELETE_TODO_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Todo deleted successfully!',
  [LANGUAGE.THAI]: 'ลบงานสำเร็จ!',
}

export const DELETE_TODO_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to delete todo.',
  [LANGUAGE.THAI]: 'ลบงานไม่สำเร็จ!',
}
