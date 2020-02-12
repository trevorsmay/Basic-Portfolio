import React from "react";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Container } from "reactstrap";
import crBeach from "../assets/images/best-cr-beach.jpg";
import archesRoad from "../assets/images/arches-road.jpeg";
import crestedButte from "../assets/images/crested-butte.jpg";
import caBeach from "../assets/images/ca-beach.jpg";
import moabRoad from "../assets/images/moab-road.jpg";
import monarchPass from "../assets/images/monarch-pass.jpg";
import montanaRoad from "../assets/images/montana-road.jpg";
import mysticIsland from "../assets/images/mystic-island.jpg";
import "./slide.css";
// import ParallaxImage from "../components/ParallaxImage";



function Slide() {
return(
<ParallaxProvider>
<Container className="top">
<h1>Manzanillo Beach Costa Rica</h1> 
<ParallaxBanner
className="cr-beach"
layers ={[
    {
    image: crBeach,
    amount: 0.4,
    }
]}
>   
</ParallaxBanner>        
<h1>Arches National Park</h1>
<ParallaxBanner
className="arches-road"
layers ={[
    {
    image: archesRoad,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
<h1> Crested Butte, Colorado</h1>
<ParallaxBanner
className="crested-butte"
layers ={[
    {
    image: crestedButte,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
<h1>Huntington Beach</h1>
<ParallaxBanner
className="ca-beach"
layers ={[
    {
    image: caBeach,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
<h1>Moab, Utah</h1>
<ParallaxBanner
className="moab-road"
layers ={[
    {
    image: moabRoad,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
<h1>Monarch Pass Colorado</h1>
<ParallaxBanner
className="monarch-pass"
layers ={[
    {
    image: monarchPass,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
<h1>Bozeman, Montana</h1>
<ParallaxBanner
className="montana-road"
layers ={[
    {
    image: montanaRoad,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
<h1>Mystic Island</h1>
<ParallaxBanner
className="mystic-island"
layers ={[
    {
    image: mysticIsland,
    amount: 0.4,
    }
]}
>    
</ParallaxBanner>
    </Container>
</ParallaxProvider>

);

}

export default Slide;