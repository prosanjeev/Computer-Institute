
import TopHeader from './components/Header/TopHeader'
import { Outlet } from 'react-router-dom'
import DownFooter from './components/Footer/DownFooter'
import NAvBarNew from './components/Header/NavBar/NAvBarNew'

const MainLayout = () => {
  return (
    <>
    <TopHeader/>
    <NAvBarNew/>
     <Outlet/>
     <DownFooter/>
    
    </>
  )
}

export default MainLayout