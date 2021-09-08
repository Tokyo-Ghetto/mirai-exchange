import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HomeExchange from '../components/HomeExchange'
import NavbarExchange from '../components/NavbarExchange'
import Sidebar from '../components/Sidebar'

const HomeExchangePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavbarExchange toggle={toggle}/>
            <HomeExchange/>
            <Footer />
        </>
    )
}

export default HomeExchangePage
