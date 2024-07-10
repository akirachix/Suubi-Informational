import "./index.css";
import Brenda  from "../images/Brenda.jpg";
import Lavender from "../images/Lavender.jpg";
import Valentine from "../images/Valentine.jpg";
import Nakato from "../images/Nakato.jpg";
import Faith from "../images/Faith.jpg";

const Team = () => {
  return (
    
      <div className="meetteam">

        <div>
        <h2 className="ourteam">Meet The Team</h2>
        </div>

        
          
          
          <div className="team">
          <div className="nakato">
          <img src={Nakato} alt="Nakato" className="teamimages" />
          
          <div className="membername">
            <h4>Nakato Musana</h4>
            {/* <p>Data Analyst</p> */}
          </div>
          </div>

          <div className="valentine">
          <img src={Valentine} alt="Valentine" className="teamimages" />
          <div className="membername">
            <h4>Valentine Nkatha</h4>
           
            </div>
          </div>
          <div className="lavender">
            <img src={Lavender} alt="Lavender" className="teamimages" />
            <div className="membername">
              <h4>Lavender Anyango</h4>
              
            </div>
           </div> 
           
           
          <div className="brenda">
          <img src={Brenda} alt="Brenda" className="teamimages" />
          <div className="membername">
            <h4>Brenda Khamali</h4>
          
            </div>
          </div>

          <div className="faith">
          <img src={Faith} alt="Faith" className="teamimages" />
          <div className="membername">
            <h4>Faith Wanyoike</h4>
            
          </div>
          </div>
        
        </div>
       </div>
    
  );
};
export default Team;
