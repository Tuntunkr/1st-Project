// import React from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import image from "./image/First.jpg"
// import Hydrabad from "./image/Hydrabad.jpg"
// import Pune from "./image/Pune.jpg"
// import Bangalore from "./image/Bangalore.jpg"
// import Delhi from "./image/Delhi.jpg"
//  import Logo from "./image/Logo.jpg"
// import TKY from "./image/TKY.jpg"
// import TK from "./image/TK.jpg"
// import TJ from "./image/TJ.jpg"
// import Panasonic from "./image/Panasonic.png"
// import Adda52 from "./image/Adda52.png"
// import Dineout from "./image/Dineout.png"
// import Satyarthi from "./image/Satyarthi.png"
// import vigo from "./image/Vigo.png"
// import Climber from "./image/Climber.png"
// import Facebook from "./image/Facebook.png"
// import Instagram from "./image/Instagram.png"
// import Youtube from "./image/Youtube.png"
// import Twitter from "./image/Twitter.png"
// import Opportunity from "./image/Opportunity.png"
// import Certificate from "./image/Certificate.png"





// function Nav() {

//     const navStyle = {
//         color: 'orange'
//     };

//     return ( 
//         <nav>
//                  <img src={Logo} alt="" />
                
//                 <FaIcons.FaBars  />            
//                 <ul>
//                     <>
//                         <h1>Intern with the best companies and enhance your college experience</h1>
//                     </>
//                     <img src={image}alt=""/> 

//                     <button>REGISTER NOW</button>
                
//                     <h1> INTERNSHIPS BY LOCATION</h1> 
//                     <div className="card-image">
                       
//                         <img src={Hydrabad} alt="" />
//                         <img src={Pune} alt="" />
//                         <img src={Bangalore} alt="" />
//                         <img src={Delhi} alt="" />  
//                     </div>


//                     <h1> ABOUT YOUTHBEAT</h1>

//                         <p>Channelize your creativity by associating with the biggest 
//                            brands in the country by representing brands as a campus ambassador for your college.
//                            Channelize your creativity by associating with the biggest 
//                            brands in the country by representing brands as a campus ambassador for your college.
//                         </p>

//                     <button>Read more</button>
                

                
//                     <h1> FEATURED INTERNSHIPS</h1> 

//                         <img src={Panasonic} alt="" />  
//                         <img src={Adda52} alt="" />  
//                         <img src={Dineout} alt="" />  
//                         <img src={Satyarthi} alt="" />  
                
//                     <h1>WHY YOUTHBEAT</h1>

     
//                     <div id="box1"><img src={Opportunity} alt=""/><h6>Oppertunity to work with brands during college years</h6></div>
//                     <div id="box2"><img src={Certificate} alt=""/><h6>Certificate from sociowash</h6></div>
//                     <div id="box3"><img src={Opportunity} alt=""/><h6>Oppertunity to work with brands during college years</h6></div>
//                     <div id="box4"><img src={Certificate} alt=""/> <h6>Certificate from sociowash</h6></div><br/><br/><br/><br/><br/><br/><br/>
                    


//                     <div id="box5"><h6>1500 Colleges</h6></div>
//                     <div id="box6"><h6>100000 Colleges Students </h6></div>
//                     <div id="box7"><h6>22 Student age groups</h6></div>
//                     <div id="box8"><h6>5000 Internship experience delivered</h6></div>


//                     <br/><br/><br/><br/><br/><br/>

//                     <div>

//                     <h1> WHAT STUDENTS SAY ABOUT US?</h1> 

//                         <img src={TKY} alt="" />  

//                                 <p>Learn ipsum dolor sit amet,consectur adilicing elit.
//                                     Adipisci eum in ipsum magni nulla obcaecati omnis quam
//                                     quisquam repellendus teneur! Ad exercitationem facilis fuga 
//                                     incidunt maxime nobis nostrum optio velit.
//                                 </p>
//                         <b><p>MOHD MOZAMMIL</p></b>
//                         <p>DELHI UNIVERSITY</p>

                    
//                         <img src={TK} alt="" />  

//                                 <p>Learn ipsum dolor sit amet,consectur adilicing elit.
//                                     Adipisci eum in ipsum magni nulla obcaecati omnis quam
//                                     quisquam repellendus teneur! Ad exercitationem facilis fuga 
//                                     incidunt maxime nobis nostrum optio velit.
//                                 </p>
//                         <b><p>MOHD MOZAMMIL</p></b>
//                         <p>DELHI UNIVERSITY</p>
                                                

//                         <img src={TJ} alt="" />  

//                                 <p>Learn ipsum dolor sit amet,consectur adilicing elit.
//                                     Adipisci eum in ipsum magni nulla obcaecati omnis quam
//                                     quisquam repellendus teneur! Ad exercitationem facilis fuga 
//                                     incidunt maxime nobis nostrum optio velit.
//                                 </p>
//                         <b><p>MOHD MOZAMMIL</p></b>
//                         <p>DELHI UNIVERSITY</p>
//                     </div>

//                     <h1> CLIENTS</h1> 
                

//                         <img src={Panasonic} alt="" />  
//                         <img src={Adda52} alt="" />  
//                         <img src={Dineout} alt="" />  
//                         <img src={Satyarthi} alt="" />  
//                         <img src={Climber} alt="" />  
//                         <img src={vigo} alt="" /> <br/> 
//                         <img src={vigo} alt="" />  <br/> <br/>
//                         <img src={vigo} alt="" />  
                    

//                     <h1>SIGN UP</h1>

//                         <p>Fill this form to keep yourself updated about the best internships in the market. 
//                             We will buzz you whenever we think something interesrting has come up.
//                         </p>

//                         <div className="name">NAME
//                             <input className="name" type="text" placeholder=" Name*"/>
//                         </div>

//                         <div className="email">EMAIL
//                             <input className="email" type="text" placeholder="Email*"/>
//                         </div>

//                         <div className="College">COLLEGE
//                             <input className="College" type="text" placeholder="College*"/>
//                         </div>

                        
//                         <div className=" Select City">CITY
                            
//                             <input className="Select City" type="text" placeholder="Select City"/>
                            
//                                 <select>
//                                     <option>Delhi</option>
//                                     <option>Hariyana</option>
//                                     <option>Punjab</option>
//                                 </select>
//                         </div>
                        
                        
//                         <div className="Phone number">PHONE NUMBER
//                             <input className="Phone number" type="text" placeholder="Phone number*"/>
//                         </div>
                        
//                         <div className="Mobile number">MOBILE NUMBER
//                             <input className="Mobile number" type="text" placeholder="Mobile number you are currently in use*"/>
//                         </div>
                        
//                         <div className="Which">WHICH YEAR
//                             <input className="Which year" type="text" placeholder="Which year are you in"/>
//                                 <div>

//                                     <select>
//                                             <option>1890</option>
//                                             <option>1891</option>
//                                             <option>2090</option>
//                                     </select>
//                                 </div>
//                         </div>
                            
                        
                        
//                         <div className="Course">COURSE
//                             <input className="Course" type="text" placeholder="What course are you pursuing*"/>
//                         </div>
                        
//                         <div className="Interest">INTEREST
//                             <input className="Interest" type="text" placeholder="What are your area of interest?*"/>
//                         </div>
                        
//                         <div className="Role model">ROLE MODEL
//                             <input className="Role model" type="text" placeholder="Who is your role model in life and why"/>
//                         </div>
                        
//                         <div className="Internship">INTERNSHIP
//                             <input className="Internship" type="text" placeholder="What type of internship are you looking forwrad"/>
//                         </div>
                        
//                         <div className="Internship field">INTERNSHIP FIELD
//                             <input className="Internship field" type="text" placeholder="In which field are you looking forward to intern"/>
//                         </div>
                        
//                         <p>By filling this form,I permit youthbeat in to send me communication about internships in future.</p>
                        
//                         <button>Send</button>




//                     <b>
//                         <p>ABOUT</p>
//                         <p>STUDENT SPEAK</p>
//                         <p>WHY YOUTH BEAT</p>
//                         <p>CLIENT</p>
//                         <p>CONTACT US</p><br/>
//                     </b>

//                     <p>FOLLOW US ON</p>
                    
//                         <img src={Facebook} alt="" />  
//                         <img src={Instagram} alt="" />  
//                         <img src={Youtube} alt="" />  
//                         <img src={Twitter} alt="" />  


//                 </ul>
             
//         </nav>
//     );
// }

// export default Nav;












// import React from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";

// function Nav() {

//     const navStyle = {
//         color: 'orange'
//     };



//     return ( 
//         <nav>
//             <h3 className="Logo">
//                  <img src="img.jpg" />
//             </h3> 

//                 <ul>
//                 <FaIcons.FaBars  />


//                     <box>
//                         <h1>Intern with the best companies and enhance your college experience</h1>
//                     </box>


//                     <button>REGISTER NOW</button>
                
//                     <h1> INTERNSHIPS BY LOCATION</h1> 
                
//                     <img src="img.jpg" alt=""/>
            
                
//                     <h1> ABOUT YOUTHBEAT</h1>
//                         <p>Channelize your creativity by associating with the biggest 
//                            brands in the country by representing brands as a campus ambassador for your college.
//                            Channelize your creativity by associating with the biggest 
//                            brands in the country by representing brands as a campus ambassador for your college.
//                         </p>
//                     <button>Read more</button>
                

                
//                     <h1> FEATURED INTERNSHIPS</h1> 

                

                
//                     <h1> WHAT STUDENTS SAY ABOUT US?</h1> 
//                         <p>Learn ipsum dolor sit amet,consectur adilicing elit.
//                            Adipisci eum in ipsum magni nulla obcaecati omnis quam
//                            quisquam repellendus teneur! Ad exercitationem facilis fuga 
//                            incidunt maxime nobis nostrum optio velit.
//                         </p>
//                         <b><p>MOHD MOZAMMIL</p></b>
//                         <p>DELHI UNIVERSITY</p>

                    
                
//                     <h1> CLIENTS</h1> 
                


//                     <h1>SIGN UP</h1>

//                     <p>Fill this form to keep yourself updated about the best internships in the market. 
//                         We will buzz you whenever we think something interesrting has come up.
//                     </p>

//                     <div className="name">NAME
//                     <input className="name" type="text" placeholder=" Name*"/>
//                     </div>

//                     <div className="email">EMAIL
//                     <input className="email" type="text" placeholder="Email*"/>
//                     </div>

//                     <div className="College">COLLEGE
//                     <input className="College" type="text" placeholder="College*"/>
//                     </div>

                    
//                             <div className=" Select City">CITY
//                             <input className="Select City" type="text" placeholder="Select City"/>
//                             </div>
                    
                    
//                     <div className="Phone number">PHONE NUMBER
//                     <input className="Phone number" type="text" placeholder="Phone number*"/>
//                     </div>
                    
//                     <div className="Mobile number">MOBILE NUMBER
//                     <input className="Mobile number" type="text" placeholder="Mobile number you are currently in use*"/>
//                     </div>
                    
//                     <div className="Which">WHICH YEAR
//                     <input className="Which year" type="text" placeholder="Which year are you in"/>
//                     </div>
                    
//                     <div className="Course">COURSE
//                     <input className="Course" type="text" placeholder="What course are you pursuing*"/>
//                     </div>
                    
//                     <div className="Interest">INTEREST
//                     <input className="Interest" type="text" placeholder="What are your area of interest?*"/>
//                     </div>
                    
//                     <div className="Role model">ROLE MODEL
//                     <input className="Role model" type="text" placeholder="Who is your role model in life and why"/>
//                     </div>
                    
//                     <div className="Internship">INTERNSHIP
//                     <input className="Internship" type="text" placeholder="What type of internship are you looking forwrad"/>
//                     </div>
                    
//                     <div className="Internship field">INTERNSHIP FIELD
//                     <input className="Internship field" type="text" placeholder="In which field are you looking forward to intern"/>
//                     </div>
                    
//                     <p>By filling this form,I permit youthbeat in to send me communication about internships in future.</p>
                    
//                     <b>
//                         <p>ABOUT</p>
//                         <p>STUDENT SPEAK</p>
//                         <p>WHY YOUTH BEAT</p>
//                         <p>CLIENT</p>
//                         <p>CONTACT US</p><br/>


//                         <p>FOLLOW US ON</p>
//                     </b>
//                     <button>Send</button>

//              </ul>
            
//         </nav>
//     );
// }

// export default Nav;









// <ul className = "nav-links" >
// <Link style = { navStyle } to = "/Internship" >
//      Internship  
// </Link> 

// <Link style = { navStyle } to = "/about" >
//     About us 
// </Link> 

// <Link style = { navStyle } to = "/Feature" >
//      Feature 
// </Link> 

// <Link style = { navStyle } to = "/Youth" >
//      Youthbeat
// </Link> 

// <Link style = { navStyle } to = "/client" >
//      Ourclient
// </Link> 


// <Link style = { navStyle } to = "/Signup" >
//      Signup
// </Link> 
// </ul> 
