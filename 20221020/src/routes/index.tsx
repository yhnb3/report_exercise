import { Layout } from 'components'
import { Route, Routes } from 'react-router-dom'
import Basket from './Basket'
import Detail from './Detail'

import Main from './Main'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Main />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='basket' element={<Basket />} />
      </Route>
    </Routes>
  )
}

export default App
