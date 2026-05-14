import WithAuth from '@/views/components/core/WithAuth'

import HomePage from '@/views/pages/HomePage'

export default async function Page() {
  return (
    <WithAuth redirectPath="/login">
      <HomePage />
    </WithAuth>
  )
}
