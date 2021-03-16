import React from "react";

import * as FaIcons from "react-icons/fa";
import image from "./image/First.jpg"
import Hydrabad from "./image/Hydrabad.jpg"

 import Logo from "./image/logo.jpg"
import TKY from "./image/TKY.jpg"

import Panasonic from "./image/Panasonic.png"
import Adda52 from "./image/Adda52.png"
import Dineout from "./image/Dineout.png"
import Satyarthi from "./image/Satyarthi.png"
import vigo from "./image/Vigo.png"
import Climber from "./image/Climber.png"
import Facebook from "./image/Facebook.png"
import Instagram from "./image/Instagram.png"
import Youtube from "./image/Youtube.png"
import Twitter from "./image/Twitter.png"
import Opportunity from "./image/Opportunity.png"
import Certificate from "./image/Certificate.png"



function Nav() {

    const navStyle = {
        color: 'orange'
    };

    return ( 
        <nav>
                 <img src={Logo} alt="" />
                
                <FaIcons.FaBars  />   
                         

        
    



            <h1>Intern with the best companies and enhance your college experience</h1>
                <img src={image}alt=""/> 


                <button>REGISTER NOW</button>





                <h1> INTERNSHIPS BY LOCATION</h1> 
                    
                       
                    <div id="box25"><img src={Hydrabad} alt="" />Hydrabad</div>
                    <div id="box26"><img src={Hydrabad} alt="" />Hydrabad</div>
                    <div id="box27"><img src={Hydrabad} alt="" />Hydrabad</div>
                    <div id="box28"><img src={Hydrabad} alt="" />Hydrabad</div>
                    



                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                




                                        <h1> ABOUT YOUTHBEAT</h1>

                    <p>Channelize your creativity by associating with the biggest 
                    brands in the country by representing brands as a campus ambassador for your college.
                    Channelize your creativity by associating with the biggest 
                    brands in the country by representing brands as a campus ambassador for your college.
                    </p>

                    <button>Read more</button>








                
                    <h1> FEATURED INTERNSHIPS</h1>




                    <div id="box1"><img src={Panasonic} alt=""/></div>
                    <div id="box2"><img src={Adda52} alt=""/></div>
                    <div id="box3"><img src={Dineout} alt=""/></div>
                    <div id="box4"><img src={Satyarthi} alt=""/></div>

                    <br/><br/><br/><br/><br/><br/><br/>




                    <h1>WHY YOUTHBEAT</h1>


                    <div id="box5"><img src={Opportunity} alt=""/><h6>Oppertunity to work with brands during college years</h6></div>
                    <div id="box6"><img src={Certificate} alt=""/><h6>Certificate from sociowash</h6></div>
                    <div id="box7"><img src={Opportunity} alt=""/><h6>Oppertunity to work with brands during college years</h6></div>
                    <div id="box8"><img src={Certificate} alt=""/> <h6>Certificate from sociowash</h6></div><br/><br/><br/><br/><br/><br/><br/>



                    <div id="box9"><h6>1500 Colleges</h6></div>
                    <div id="box10"><h6>100000 Colleges Students </h6></div>
                    <div id="box11"><h6>22 Student age groups</h6></div>
                    <div id="box12"><h6>5000 Internship experience delivered</h6></div>


                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="container">
                        <h1> WHAT STUDENTS SAY ABOUT US?</h1> 

                            <img src={TKY} alt="" />  

                                    <p>Learn ipsum dolor sit amet,consectur adilicing elit.
                                        Adipisci eum in ipsum magni nulla obcaecati omnis quam
                                        quisquam repellendus teneur! Ad exercitationem facilis fuga 
                                        incidunt maxime nobis nostrum optio velit.
                                    </p>
                            <b><p>Tuntun kumar </p></b>
                            <p>DELHI UNIVERSITY</p>

                    </div>



 
                        <h1> OURCLIENTS</h1> 
                

                        <div id="box17"><img src={Adda52} alt="" /></div>
                        <div id="box18"><img src={Dineout} alt="" /></div>
                        <div id="box19"><img src={Satyarthi} alt="" /></div>
                        <div id="box20"><img src={Climber} alt="" /></div>


                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    
                        <div id="box21"><img src={Panasonic} alt="" /></div>
                        <div id="box22"><img src={vigo} alt="" /></div>
                        <div id="box23"><img src={vigo} alt="" /></div>
                        <div id="box24"><img src={vigo} alt="" /></div>
                
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            

            
                        <h1>SIGN UP</h1>

                        <p>Fill this form to keep yourself updated about the best internships in the market. 
                            We will buzz you whenever we think something interesrting has come up.
                        </p>

                        <div className="name">NAME
                            <input className="name" type="text" placeholder=" Name*"/>
                        </div>

                        <div className="email">EMAIL
                            <input className="email" type="text" placeholder="Email*"/>
                        </div>

                        <div className="College">COLLEGE
                            <input className="College" type="text" placeholder="College*"/>
                        </div>


                        <div className=" Select City">CITY
                            
                            <input className="Select City" type="text" placeholder="Select City"/>
                            
                                <select>
                                    <option>Delhi</option>
                                    <option>Hariyana</option>
                                    <option>Punjab</option>
                                </select>
                        </div>


                        <div className="Phone number">PHONE NUMBER
                            <input className="Phone number" type="text" placeholder="Phone number*"/>
                        </div>

                        <div className="Mobile number">MOBILE NUMBER
                            <input className="Mobile number" type="text" placeholder="Mobile number you are currently in use*"/>
                        </div>

                        <div className="Which">WHICH YEAR
                            <input className="Which year" type="text" placeholder="Which year are you in"/>
                                <div>

                                    <select>
                                            <option>1890</option>
                                            <option>1891</option>
                                            <option>2090</option>
                                    </select>
                                </div>
                        </div>
                            


                        <div className="Course">COURSE
                            <input className="Course" type="text" placeholder="What course are you pursuing*"/>
                        </div>

                        <div className="Interest">INTEREST
                            <input className="Interest" type="text" placeholder="What are your area of interest?*"/>
                        </div>

                        <div className="Role model">ROLE MODEL
                            <input className="Role model" type="text" placeholder="Who is your role model in life and why"/>
                        </div>

                        <div className="Internship">INTERNSHIP
                            <input className="Internship" type="text" placeholder="What type of internship are you looking forwrad"/>
                        </div>

                        <div className="Internship field">INTERNSHIP FIELD
                            <input className="Internship field" type="text" placeholder="In which field are you looking forward to intern"/>
                        </div>

                        <p>By filling this form,I permit youthbeat in to send me communication about internships in future.</p>

                        <button>Send</button>




                        <b>
                        <p>ABOUT</p>
                        <p>STUDENT SPEAK</p>
                        <p>WHY YOUTH BEAT</p>
                        <p>CLIENT</p>
                        <p>CONTACT US</p><br/>
                        </b>

                        <p>FOLLOW US ON</p>

                        <div id="box13"><img src={Facebook} alt="" /></div>
                        <div id="box14"><img src={Instagram} alt="" /></div>
                        <div id="box15"><img src={Youtube} alt="" /></div>
                        <div id="box16"><img src={Twitter} alt="" /></div>





        </nav>
    );
}

export default Nav;