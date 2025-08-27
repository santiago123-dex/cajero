import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {AppUser} from './AppUser'
import React   from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
    <BrowserRouter>
      <AppUser />
    </BrowserRouter>
  //</React.StrictMode>
)
