import SharedLayout from './components/SharedLayout'
import { Route, Routes } from 'react-router'
import Index from './components/Index'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </ThemeProvider>)
}

export default App;