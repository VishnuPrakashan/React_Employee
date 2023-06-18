import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
        <div className="containers">
        <form action="/" id="forms">
            <label htmlFor="name" className="heading">Name your Organization</label>
            <input className='input-field' type="text" id="name" placeholder="enter organization name"/>
        </form>
        <h3>Select your organization Type below</h3>
        <div class="box-container">
             <div  className="box">
                <img className="img1" src="./images/first.png" alt=""/>
             </div>
             <div className="box">
                <img className="img2" src="./images/second.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img  src="./images/third.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/four.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/fifth.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/six.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/seven.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img src="./images/eight.png" alt=""/>
                <p>Construction</p>
             </div>
        </div>
   </div>
</>
  )
}

export default Home