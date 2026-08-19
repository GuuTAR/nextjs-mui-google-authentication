'use client'

import { useCallback } from 'react'

import { MenuItem, SelectChangeEvent } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

import { LANGUAGE } from '@/enum/global'

import { LANGUAGE_OPTIONS } from '@/data/global'

import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import PageContainer from '@/views/components/core/PageContainer'
import PageHeader from '@/views/components/core/PageHeader'
import ProfileAvatar from '@/views/components/core/ProfileAvatar'

import * as Language from './lang'
import * as Styles from './style'

export default function ProfilePage() {
  const { language, setLanguage } = useAppData()
  const { userDisplayName, userEmail, handleLogout } = useUserData()

  const handleLangChange = useCallback(
    (event: SelectChangeEvent<unknown>): void => {
      setLanguage(event.target.value as LANGUAGE)
    },
    [setLanguage],
  )

  return (
    <PageContainer isShowAppMenu>
      <Styles.PageWrapper>
        <PageHeader title={Language.PROFILE[language]} subtitle={Language.PROFILE_SUBTITLE[language]} />

        <Styles.AvatarCard elevation={0}>
          <ProfileAvatar width={80} height={80} />
          <Styles.ProfileName variant="h5">{userDisplayName}</Styles.ProfileName>
          <Styles.ProfileEmail variant="body2">{userEmail}</Styles.ProfileEmail>
        </Styles.AvatarCard>

        <Styles.SectionLabel variant="overline">{Language.SECTION_ACCOUNT[language]}</Styles.SectionLabel>
        <Styles.SectionCard elevation={0}>
          <Styles.InfoRow>
            <Styles.RowIconWrapper>
              <PersonOutlinedIcon fontSize="small" />
            </Styles.RowIconWrapper>
            <Styles.RowContent>
              <Styles.RowFieldLabel variant="caption">{Language.DISPLAY_NAME[language]}</Styles.RowFieldLabel>
              <Styles.RowFieldValue variant="body1">{userDisplayName}</Styles.RowFieldValue>
            </Styles.RowContent>
            <Styles.RowBadge variant="caption">{Language.GOOGLE[language]}</Styles.RowBadge>
          </Styles.InfoRow>
          <Styles.RowDivider />
          <Styles.InfoRow>
            <Styles.RowIconWrapper>
              <EmailOutlinedIcon fontSize="small" />
            </Styles.RowIconWrapper>
            <Styles.RowContent>
              <Styles.RowFieldLabel variant="caption">{Language.EMAIL[language]}</Styles.RowFieldLabel>
              <Styles.RowFieldValue variant="body1">{userEmail}</Styles.RowFieldValue>
            </Styles.RowContent>
            <Styles.RowBadge variant="caption">{Language.GOOGLE[language]}</Styles.RowBadge>
          </Styles.InfoRow>
        </Styles.SectionCard>

        <Styles.SectionLabel variant="overline">{Language.SECTION_PREFERENCES[language]}</Styles.SectionLabel>
        <Styles.SectionCard elevation={0}>
          <Styles.InfoRow>
            <Styles.RowIconWrapper>
              <LanguageIcon fontSize="small" />
            </Styles.RowIconWrapper>
            <Styles.RowContent>
              <Styles.RowFieldLabel variant="caption">{Language.LANGUAGE_LABEL[language]}</Styles.RowFieldLabel>
              <Styles.LangSelect
                variant="standard"
                disableUnderline
                value={language}
                onChange={handleLangChange}
                renderValue={(value) => {
                  const option = LANGUAGE_OPTIONS.find((opt) => opt.value === value)
                  return <Styles.LangSelectValue variant="body1">{option?.label ?? ''}</Styles.LangSelectValue>
                }}
              >
                {LANGUAGE_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Styles.LangSelect>
            </Styles.RowContent>
          </Styles.InfoRow>
        </Styles.SectionCard>

        <Styles.LogoutButton variant="outlined" onClick={handleLogout}>
          <Styles.LogoutIconStyled />
          <Styles.LogoutText variant="body1">{Language.LOGOUT[language]}</Styles.LogoutText>
        </Styles.LogoutButton>
      </Styles.PageWrapper>
    </PageContainer>
  )
}
