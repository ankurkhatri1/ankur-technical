import React from 'react'
import Sdata from './Sdata'
import Card from './Card'
function Services() {
    return (
        

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        {
                            Sdata.map((vel,ind)=>{
                                return <Card key={ind}

                                    imgsrc={vel.imgsrc}
                                    title={vel.title}
                                />
                            })
                        }</div>
                
                           
                            
                        
                            

                        </div>

                    </div>
                </div>
        
        
    )
}

export default Services
