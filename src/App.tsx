import SharedLayout from './components/SharedLayout'
import { Route, Routes } from 'react-router'
import Index from './components/Index'

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>)
}

export default App
