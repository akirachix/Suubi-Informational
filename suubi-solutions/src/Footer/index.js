import "./index.css";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa6";


import logos from "../Assets/Suubi-logo.png";



const Footer = () => {
    return (
      <div>
        
    
        <footer>
         
        <div className="footer-section">
          <img src={logos} alt="Suubi-Logo" className="logos"/>
          </div>
          <div>
            
            <h4>About Us</h4>
            
            
            <p>Mission</p>
            
            
            <p>The Team</p>
            </div>
            
          
          <div className="footer-content">
            <h4>Products</h4>
            <p>Suubi SMS</p>
             <p>Suubi App</p>
           
           
          </div>
          <div className="footer-content">
            <h4>Get In Touch</h4>
            <p>616 Korongo Road,off Ndege Road,Karen</p>
            <p>info@suubi.com</p>
            <div className="icons">
            <FaTwitter alt="twitter-icon" className="Icons"/> 
              <FaFacebook alt="facebook-icon" className="Icons"/>
              <FaGoogle alt="google-icon" className="Icons"/>
              
            </div>
          </div>
        </footer>
      </div>
    );
  };
  export default Footer;
  