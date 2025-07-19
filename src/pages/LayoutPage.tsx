import HeaderComp from '../components/HeaderComp'
import { Outlet } from 'react-router-dom'
import FooterComp from '../components/FooterComp'
// import CheckoutSticky from '../components/CheckoutStickyComp'

const LayoutPage = () => {
  return (
    <>
    <HeaderComp />
    <Outlet />
    <FooterComp />
     {/* <CheckoutSticky /> */}
    </>
  )
}

export default LayoutPage