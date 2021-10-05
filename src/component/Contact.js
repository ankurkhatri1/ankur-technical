import React from 'react'

function Contact() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form style={{height:'100vh'}}>
                   
                    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone no.</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter your number"/>
</div>

  
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12 ">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
