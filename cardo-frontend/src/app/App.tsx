import { FC } from 'react'
import { AppRouter } from './providers/app-router/AppRouter'
import { AppHeader } from '@/widgets/header/AppHeader'

export const App: FC = () => {
  return (
    <div className="grid">
      <AppHeader />
      <AppRouter />
    </div>
  )
}