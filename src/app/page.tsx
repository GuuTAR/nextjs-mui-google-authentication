import WithAuth from '@/views/components/core/WithAuth'

import TodoPage from '@/views/pages/TodoPage'

export default async function Page() {
  return (
    <WithAuth redirectPath="/login">
      <TodoPage />
    </WithAuth>
  )
}
