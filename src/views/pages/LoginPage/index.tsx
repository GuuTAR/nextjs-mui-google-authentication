'use client'

import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import useAuth from '@/hooks/useAuth'

import { GoogleLoginButton, LoginContainer, LoginPageStyle } from './style'

export default function LoginPage() {
  const { isAuthEnabled, handleLogin } = useAuth()

  return (
    <LoginPageStyle>
      <LoginContainer>
        <Typography variant="h6" align="center" color="textPrimary">
          Sign in to Your Account
        </Typography>
        {isAuthEnabled ? (
          <GoogleLoginButton variant="outlined" onClick={handleLogin}>
            <Image src="/icons/google.svg" alt="Google Icon" width={24} height={24} />
            <Typography variant="body2" align="center" color="textPrimary">
              Sign in with Google
            </Typography>
          </GoogleLoginButton>
        ) : (
          <Button variant="outlined" onClick={handleLogin}>
            <Typography variant="body2" align="center" color="textPrimary">
              Sign in with no authentication
            </Typography>
          </Button>
        )}
      </LoginContainer>
    </LoginPageStyle>
  )
}
