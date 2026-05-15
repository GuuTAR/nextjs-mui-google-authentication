# nextjs-mui-google-authentication

Project template for reusable

## Features

1. NextJS version 16 with Material UI version 9
2. Google Authentication

## Getting start

1. Install dependency

   ```
   yarn
   ```

2. rename "env.template" to ".env"

   > Firebase is disabled by default

   ```
   NEXT_PUBLIC_ENABLE_FIREBASE_AUTH=0

   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

   FIREBASE_ADMIN_PROJECT_ID=
   FIREBASE_ADMIN_PRIVATE_KEY=
   FIREBASE_ADMIN_CLIENT_EMAIL=

   USER_SESSION_LIFETIME_DAYS=7
   API_TIMEOUT=5000
   ```

3. Running server

   > NextJS default run on port 3000

   ```
   yarn dev
   ```
