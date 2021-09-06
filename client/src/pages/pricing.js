import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PricingPg from '../components/PricingPg'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { pricingObj } from '../components/InfoSection/Data'
import NavbarStatic from '../components/NavbarStatic'

const PricingPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavbarStatic toggle={toggle}/>
            <InfoSection {...pricingObj}/>
            <PricingPg/>
            <Footer />
        </>
    )
}

export default PricingPage
