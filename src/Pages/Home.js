import Navbar from "../Components/Navbar";
import BodyHome from "../Components/BodyHome";
import FAQ from "../Components/FAQ";
import CardBox from "../Components/CardBox";

export default function Home() {
    return (
        <>
            <Navbar />
            <BodyHome />
            <CardBox />
            <FAQ />
        </>
    )
}