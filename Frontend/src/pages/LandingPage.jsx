import HeroSection from '../components/HeroSection'
import Biography from '../components/Biography'
import Work from '../components/Work'
import Testimonials from '../components/Testinomial'
import Footer from '../components/Footer'
import CustomePaint from '../components/CustomePaint'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomOrder from './CustomOrder'
import TrackMyOrder from './TrackMyOrder'
import Cart from './Cart'
import Layout from '../components/adminDashboard/Layout'
import AllOrderListing from './adminDashboard/AllOrderListing'
import CompletedOrderListing from './adminDashboard/PersonalDetails'
import OngoingOrderListing from './adminDashboard/OngoingOrderListing'
import CancelOrderListing from './adminDashboard/CancelOrderListing'
import AddPainting from './adminDashboard/AddPainting'
import OrderDetails from './adminDashboard/OrderDetails'
import PersonalDetailsEdit from './adminDashboard/PersonalDetailsEdit'
import PersonalDetails from './adminDashboard/PersonalDetails'
import ArtEdit from './adminDashboard/artEdit'
import NewArt from './adminDashboard/NewArt'

const LandingPage = () => {
    return (
        <>

            <BrowserRouter >
                <Routes>
                    <Route path='/' element={
                        <div className='playfair-display-regular' >
                            <HeroSection />
                            <Biography />
                            <Work />
                            <CustomePaint />
                            <Testimonials />
                            <Footer />
                        </div>
                    } />
                    <Route path='/custom-order' element={<CustomOrder />} />
                    <Route path='/track-my-order' element={<TrackMyOrder />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/admin' element={<Layout />} >
                        <Route path='/admin/orders' element={<AllOrderListing />}>
                            <Route path='/admin/orders/:orderId' element={<OrderDetails />} />
                        </Route>
                        <Route path='/admin/personal-details' element={<PersonalDetails />}>
                            <Route path='/admin/personal-details/:id' element={<PersonalDetailsEdit />} />
                        </Route>
                        <Route path='/admin/arts' element={<OngoingOrderListing />} >
                            <Route  path='/admin/arts/new' element={<NewArt />} />
                            <Route  path='/admin/arts/:id' element={<ArtEdit />} />
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>

        </>


    )
}

export default LandingPage