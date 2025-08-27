import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Index } from './views/index'
import {AppAdmin}  from './admin/AppAdmin'
import {Retiro} from './views/Retiro'
import { Confirmacion } from './views/Confirmacion'

export function AppUser() {
  return (
    <div className='w-screen h-[100dvh]'>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cantidad" element={<Retiro />} />
        <Route path='/confirmacion' element={<Confirmacion />} />
        <Route path="/administracion" element={<AppAdmin />} />
      </Routes>
    </ div>
  )
}

