

        import NavigationBar from "../components/HomeComponents/NavigationBar";
        import Header from "../components/HomeComponents/Header";
        import AboutUs from "../components/HomeComponents/AboutUs";
        import ServicesSection from "../components/HomeComponents/ServicesSection";
        import Footer from "../components/HomeComponents/Footer";


        export default function Home(){

            return(
          <>
                <NavigationBar />
                <Header />
                <AboutUs />
                <ServicesSection />
                <Footer /> 
            </>
         

            )
        }