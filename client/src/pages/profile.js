import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavbarExchange from '../components/NavbarExchange'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavbarExchange toggle={toggle}/>
            <Profile />
            <Footer />
        </>
    )
}

export default ProfilePage
