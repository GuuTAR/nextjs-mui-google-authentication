import WithAuth from '@/views/components/core/WithAuth'

import ProfilePage from '@/views/pages/ProfilePage'

export default async function Page() {
  return (
    <WithAuth redirectPath="/login">
      <ProfilePage />
    </WithAuth>
  )
}
