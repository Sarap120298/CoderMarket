import Hero from "./Hero.jsx";
 import ExpDestacadas from "./ExpDestacadas";
import RegistrateHoy from "./RegistrateHoy";
import Contactanos from "./Contactanos.jsx";
import {Outlet} from 'react-router-dom'

function Home (){
    return ( 
        <>
            <Hero/>
            <Outlet/>
        </>

     );
}
 
export default Home;