import React from 'react'
import AppRouter from './routes/AppRouter'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <AppRouter />
      <Footer />
    </div>
    </Provider>
  )
}

export default App
