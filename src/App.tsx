import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { Globalcss } from './styled'
import RoutesApp from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Globalcss />
      <div className="container">
        <Header />
      </div>
      <RoutesApp />
      <Footer />
    </BrowserRouter>
  )
}

export default App
