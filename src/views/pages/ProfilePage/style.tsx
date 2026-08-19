import { styled, Button, Divider, Paper, Select, Stack, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

export const PageWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  gap: theme.spacing(2),
  maxWidth: 520,
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 'unset',
    padding: theme.spacing(0),
  },
}))

export const AvatarCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3.75, 3, 3.25),
  borderRadius: theme.spacing(2.75),
  border: `1px solid ${theme.palette.background.default}`,
}))

export const ProfileName = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
  marginTop: theme.spacing(2.25),
}))

export const ProfileEmail = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  marginTop: theme.spacing(0.75),
}))

export const SectionLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontWeight: 600,
  letterSpacing: '0.14em',
  marginBottom: theme.spacing(-0.5),
  paddingLeft: theme.spacing(0.5),
}))

export const SectionCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(2.25),
  border: `1px solid ${theme.palette.background.default}`,
}))

export const InfoRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.75),
  padding: theme.spacing(2, 2.25),
}))

export const RowIconWrapper = styled(Stack)(({ theme }) => ({
  width: theme.spacing(4.75),
  height: theme.spacing(4.75),
  borderRadius: theme.spacing(1.375),
  background: theme.palette.background.default,
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  flexShrink: 0,
}))

export const RowContent = styled(Stack)(() => ({
  flex: 1,
  minWidth: 0,
}))

export const RowFieldLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}))

export const RowFieldValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: theme.spacing(0.25),
}))

export const RowDivider = styled(Divider)(({ theme }) => ({
  marginLeft: theme.spacing(2.25),
  marginRight: theme.spacing(2.25),
}))

export const RowBadge = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  background: theme.palette.background.default,
  borderRadius: theme.spacing(0.875),
  padding: theme.spacing(0.625, 1.125),
  fontWeight: 600,
  flexShrink: 0,
}))

export const LangSelect = styled(Select)(({ theme }) => ({
  marginTop: theme.spacing(0.25),
  '& .MuiSelect-select': {
    padding: '0 !important',
    paddingRight: `${theme.spacing(3)} !important`,
  },
  '& .MuiSelect-icon': {
    color: theme.palette.text.secondary,
  },
}))

export const LangSelectValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
}))

export const LogoutButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(1.25),
  border: `1px solid ${theme.palette.error.light}`,
  borderRadius: theme.spacing(1.75),
  '&:hover': {
    background: theme.palette.error.light,
    borderColor: theme.palette.error.main,
  },
}))

export const LogoutIconStyled = styled(LogoutIcon)(({ theme }) => ({
  color: theme.palette.error.dark,
  fontSize: 18,
}))

export const LogoutText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.dark,
  fontWeight: 700,
}))
