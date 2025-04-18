import React from 'react'
import AppRouter from './routes/AppRouter'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
    </Provider>
  )
}

export default App
