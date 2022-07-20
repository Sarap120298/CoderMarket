import Hero from "./Hero.jsx";

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