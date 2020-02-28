import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import FooterForMobile from '../Footer/FooterForMobile';
import LoginForm from '../Login/LoginForm';
import ShoppingCard from '../ShoppingCart/ShoppingCart';
import MobileIcons from '../Header/MobileIcons'

export default function ShoppingCardPage() {
    return (
        <div>
            <NavBar />
            <LoginForm />
            <ShoppingCard />
            <Footer />
            <FooterForMobile />
            <MobileIcons/>
        </div>
    )
}
