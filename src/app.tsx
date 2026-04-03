import About from "./About";
import Contact from "./Contact";
import Daytime from "./Daytime";
import Footer from "./footer";
import Gallary from "./gallary";
import Menu from "./Menu";
import NavC from "./Nav";
import Offers from "./Offers";

export default function App() {

  return (
    <div id="Home" className="min-h-scdreen select-none">
      <NavC></NavC>
      <About></About>
      <Offers></Offers>
      <Menu></Menu>
      <Daytime></Daytime>
      <Gallary></Gallary>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}