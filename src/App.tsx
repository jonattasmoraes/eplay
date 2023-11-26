import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { Globalcss } from './styled'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <Globalcss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
