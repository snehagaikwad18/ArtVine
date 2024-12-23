import HeroSection from '../components/HeroSection'
import Biography from '../components/Biography'
import Work from '../components/Work'
import Testinomial from '../components/Testinomial'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div className='playfair-display-regular' >
            <HeroSection />
            <Biography />
            <Work />
            <h1>custome art(exhibition)</h1>
            <Testinomial />
            <Footer />

        </div>
    )
}

export default LandingPage