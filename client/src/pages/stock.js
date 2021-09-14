import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HomeExchange from '../components/HomeExchange'
import NavbarExchange from '../components/NavbarExchange'
import Sidebar from '../components/Sidebar'
import Stock from '../components/Stock'

const StockPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavbarExchange toggle={toggle}/>
            <Stock/>
            <Footer />
        </>
    )
}

export default StockPage
