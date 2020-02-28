import React from 'react'
import NavBar from "../../Components/Header/NavBar";
import Slider from "../../Components/Main/WithCloud/Slider";
import PopularCard from "../../Components/Main/PopularItems/PopularCard";
import Banner from "../../Components/Main/Banner/Banner";
import FeaturedProducts from "../../Components/Main/FeaturedProducts/FeaturedProducts";
import Services from "../../Components/Main/Services/Services";
import FooterForMobile from '../../Components/Footer/FooterForMobile';
import MobileIcons from '../../Components/Header/MobileIcons';
import LoginForm from '../../Components/Login/LoginForm';
import PopularMobile from '../../Components/Main/PopularItems/PopularMobile';
import Footer from "../../Components/Footer/Footer";
import CookieConsent from "react-cookie-consent";



export default function HomePage() {
    return (
      <div>
        <NavBar />
        <LoginForm />
        <Slider />
        <PopularCard />
        <PopularMobile />
        <Banner />
        <FeaturedProducts />
        <Services />
        <Footer />
        <FooterForMobile />
        <MobileIcons />
        <CookieConsent
          
          enableDeclineButton="true"
          declineButtonText="x"
          location="bottom"
          buttonText="ACCEPT"
          cookieName="This website uses cookies"
          contentStyle={{
            margin: 0,
            maxWidth: 828
          }}
          declineButtonStyle={{
            border: "none",
            fontSize: 40,
            margin: "0 15px 0 0",
            padding: 0,
            color: "#45413e",
            background: "transparent",
            position: "absolute",
            right: 0,
            top: 0
          }}
          style={{
            display: "flex",
            backgroundColor: "#fff",
            color: "#45413e",
            maxWidth: 1170,
            left: "50%",
            transform: "translateX(-50%)",
            height: 150,
            padding: "15px 25px",
            margin: "0 auto",
            borderRadius: 6
          }}
          buttonStyle={{
            color: "#fff",
            fontSize: "13px",
            background: "#84bc22",
            width: 146,
            height: 37,
            borderRadius: 40,
            bottom: 0,
            position: "absolute",
            right: "1%"
          }}
          expires={150}
        >
          <div
            style={{
              fontSize: "16px",
              color: "#84bc22",
              fontWeight: 400,
              marginBottom: 15
            }}
          >
            This website uses cookies.
          </div>
          OSF uses its own and third-party cookies for statistical purposes, to
          know your preferences, for website performance and interaction with
          social media offering publicity tailored to your interests. If you
          continue browsing, we consider that you accept its use. You can expand
          this information consulting our{" "}
          <span style={{ fontSize: "16px", color: "#84bc22", fontWeight: 400 }}>
            Cookies Policy Page.
          </span>
        </CookieConsent>
      </div>
    );
}
