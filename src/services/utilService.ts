import { NextResponse } from 'next/server'

import { ResponseData } from '@/types/ResponseData'

class UtilService {
  /**
   * Generates up to 2 uppercase initials from a display name.
   * Falls back to the first character of the email if display name is empty,
   * or 'U' if both are unavailable.
   *
   * @param displayName - The user's full display name (e.g. "John Doe")
   * @param email - The user's email address used as fallback
   * @returns Up to 2 uppercase initials (e.g. "JD") or a single fallback character
   *
   * @example
   * getDisplayNameInitials("John Doe", "john@example.com") // "JD"
   * getDisplayNameInitials("", "john@example.com")         // "J"
   * getDisplayNameInitials("", "")                         // "U"
   */
  public getDisplayNameInitials = (displayName: string, email: string): string => {
    if (displayName) {
      return displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    return email?.[0]?.toUpperCase() ?? 'U'
  }

  /**
   * Checks whether a target string contains a search string, case-insensitively.
   *
   * @param targetString - The string to search within
   * @param searchString - The substring to look for
   * @returns `true` if `targetString` includes `searchString` (case-insensitive), otherwise `false`
   *
   * @example
   * searchIncludeString("Hello World", "world") // true
   * searchIncludeString("Hello World", "xyz")   // false
   */
  public searchIncludeString = (targetString: string, searchString: string) => {
    return targetString.toUpperCase().includes(searchString.toUpperCase())
  }

  public responseBody = <T>(statusCode: number, responseData?: ResponseData<T>): NextResponse => {
    return NextResponse.json(
      {
        message: responseData?.message,
        body: responseData?.body,
      },
      {
        status: statusCode,
      },
    )
  }
}

export const utilService = new UtilService()
