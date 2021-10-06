import React from 'react'
import Common from './Common'
import web from '../images/man.png'
import HomeSecrTwo from './HomeSecrTwo'



function Home(props) {
    return (
        <div>
           <Common Name="Grow your business with" BtnName="Get started" Nameone="Ankur Khatri" img={web}/>
           
         
           <hr style={{color:'blue'}}></hr>
           <h1 className="text-center">Our Team</h1>
           <HomeSecrTwo/>
          
           
        </div>

    )
}

export default Home
