import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { RoutesWrapper } from 'router'

const App: FC = () => (
  <BrowserRouter>
    <RoutesWrapper />
  </BrowserRouter>
)

export default App
