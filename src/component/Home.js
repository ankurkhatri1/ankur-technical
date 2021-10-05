import React from 'react'
import Common from './Common'
import web from '../images/man.png'
import HomeSecrTwo from './HomeSecrTwo'
import whatsapp from '../images/whatsap.svg'


function Home(props) {
    return (
        <div>
           <Common Name="Grow your business with" BtnName="Get started" Nameone="Ankur Khatri" img={web}/>
           <a href="https://www.google.com/search?q=whatsapp&oq=whts&aqs=chrome.1.69i57j0i10i433j0i10i131i433j0i10i433l5j0i10j0i10i433.5904j0j7&sourceid=chrome&ie=UTF-8"><div className="whatsimg"  style={{textAlign:'end' ,marginRight:'5vw' }}><img src={whatsapp} alt="" style={{animation:'animate 5s linear infinite',width:'25%'}}  /></div></a>
         
           <hr style={{color:'blue'}}></hr>
           <h1 className="text-center">Our Team</h1>
           <HomeSecrTwo/>
           
        </div>

    )
}

export default Home
