import Banner from './components/Banner'
import Header from './components/Header'
import { Globalcss } from './styled'

function App() {
  return (
    <>
      <Globalcss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
