import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import NotFound from '../../Components/NotFound/NotFound';
import Footer from '../../Components/Footer/Footer';
import LoginForm from '../../Components/Login/LoginForm';
import FooterForMobile from '../../Components/Footer/FooterForMobile';

export default function NotFoundPage() {
    return (
      <div>
        <NavBar />
        <LoginForm />
        <NotFound />
        <Footer />
        <FooterForMobile />
      </div>
    );
}
