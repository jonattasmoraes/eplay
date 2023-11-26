import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { Globalcss } from './styled'
import RoutesApp from './routes'

function App() {
  return (
    <BrowserRouter>
      <Globalcss />
      <div className="container">
        <Header />
      </div>
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App
