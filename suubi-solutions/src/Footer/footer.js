import "./footer.css";
import facebook from "../Profiles/facebook.svg";
import twitter from "../Profiles/twitter.svg";
import google from "../Profiles/google.svg";



const Footer = () => {
    return (
      <div>
        
    
        <footer>
         <img src="./assets/logo.jpg" alt="Suubi-Logo" className="logos"/>
          <div className="footer-section">
            
            <p>About Us</p>
            
            
            <p>Mission</p>
            
            
            <p>The Team</p>
          </div>
          <div className="footer-content">
            <p>Programs</p>
            <p className="link"> <a href="https://akirachix.com/programs/codeHive/">CodeHive</a></p>
             <p className="link"> <a href="https://akirachix.com/programs/codeHiveX/">CodeHiveX</a></p>
            <p className="link"><a href="https://akirachix.com/programs/#instructors">The Instructors</a></p>
            <p>Tech Allies</p>
          </div>
          <div className="footer-content">
            <p>Get In Touch</p>
            <p className="link"><a href="https://akirachix.com/">616 Korongo Road,off Ndege Road,Karen</a></p>
            <p className="link"><a href="https://akirachix.com/">info@akirachix.com</a></p>
            <div>
              <img src={facebook} alt="facebook" className="Icons"/>
              <img src={google} alt="google" className="Icons"/>
              <img src={twitter} alt="twitter" className="Icons"/>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  export default Footer;
  