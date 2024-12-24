import HeroSection from '../components/HeroSection'
import Biography from '../components/Biography'
import Work from '../components/Work'
import Testimonials from '../components/Testinomial'
import Footer from '../components/Footer'
import CustomePaint from '../components/CustomePaint'

const LandingPage = () => {
    return (
        <div className='playfair-display-regular' >
            <HeroSection />
            <Biography />
            <Work />
            <CustomePaint />
            <Testimonials />
            <Footer />

        </div>
    )
}

export default LandingPage