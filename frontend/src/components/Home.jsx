
import NavBar from "./Shared/NavBar.jsx";
import HomePage from "./../pages/HomePage.jsx";
import Footer from "./Shared/Footer.jsx";
import About from "./About.jsx";

const Home = () => {
    return (
        <div>
            <NavBar />
            <HomePage />
            <About />
            <Footer />
        </div>
    );
}

export default Home;
