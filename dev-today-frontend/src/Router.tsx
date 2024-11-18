import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { Home } from './pages/Home'
import { CountryInfo } from './pages/CountryInfo'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryInfo />} />
      </Route>
    </Routes>
  )
}
