import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { Globalcss } from './styled'
import RoutesApp from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Globalcss />
        <div className="container">
          <Header />
        </div>
        <RoutesApp />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
