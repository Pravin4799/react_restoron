import React from 'react'


import Banner from './Banner';
import Service from './Service';
import Aboutus from './Aboutus';
import Foodmenu from './Foodmenu';
import Reservation from './Reservation';
import Team from './Team';


export const Home = () => {
  return (
    <div>
        
        <Banner />
        <Service />
        <Aboutus />
        <Foodmenu />
        <Reservation />
        <Team />
       
    </div>
  )
}
