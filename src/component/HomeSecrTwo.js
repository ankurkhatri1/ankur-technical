import React from 'react'
import developerone from '../images/developerone.jpg'
import marketingmana from '../images/marketingmana.jpg'

function HomeSecrTwo() {
    return (

            
            
            <div className="containerhomesectwo col-4" >
            <div className="roy" style={{}}>
                    
            <div><img  src={developerone} alt="" style={{ marginLeft:'50px',width:'80vw'}} className="mb-5"/>
           
           <h2 style={{marginLeft:'50px',marginBottom:'0.5rem',fontSize:'2vw'}}>Roy Disuza</h2></div>
            
            
            <p style={{marginLeft:'50px',fontSize:'2vw'}}>Roy Disuza has made many website<br/> for us.he is an amazing developer he is<br/>  working for us for last 5 year.</p>
            </div>
            <div> <img  src={marketingmana} alt="" style={{ marginLeft:'50px',width:'80vw'}} className="mb-5"/>
                        <h2 style={{marginLeft:'50px',marginBottom:'0.5rem'}}>alina siroja</h2>
                        <div></div><p style={{marginLeft:'50px',fontSize:'2vw'}}> she is a profetional designer.she has worked with <br/> many celebrities.her designs are awesome and one  <br/> of the top designs.</p>
                        </div>
                        
            
           
        </div>
    )
}

export default HomeSecrTwo
