import Navbar from "../Components/Navbar";
import BodyHome from "../Components/BodyHome";
import FAQ from "../Components/FAQ";
import CardBox from "../Components/CardBox";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";

export default function Home() {
    return (
        <>
            <Preloader />
            <Navbar />
            <BodyHome />
            <CardBox />
            <FAQ />
            <Footer />
        </>
    )
}