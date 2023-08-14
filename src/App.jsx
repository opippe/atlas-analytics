import './scss/App.scss'
import Header from './components/Header'
import Hero from './components/Hero'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App