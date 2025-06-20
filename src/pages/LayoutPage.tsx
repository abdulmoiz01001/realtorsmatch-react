import HeaderComp from '../components/HeaderComp'
import { Outlet } from 'react-router-dom'
import FooterComp from '../components/FooterComp'

const LayoutPage = () => {
  return (
    <>
    <HeaderComp />
    <Outlet />
    <FooterComp />
    </>
  )
}

export default LayoutPage