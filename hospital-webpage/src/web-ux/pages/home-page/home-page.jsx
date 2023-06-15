import Body from "../../components/body"
import Banner from "../../components/banner"
import NavBar from "../../components/nav-bar"
import Footer from "../../components/footer"
import '../../styles/home-page.css'
export default function Homepage() {
    return (
        <div className="home-page">
            <div className="nav-bar">
                <NavBar></NavBar>
            </div>
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className="body">
                <Body></Body>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    )
}