import { VStack } from '@chakra-ui/react'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <VStack>
      <Header />
      <Home />
    </VStack>
  )
}

export default App
