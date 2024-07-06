import  './index.css'
import suubiabout from '../About/Aboutimages/suubiabout.png'
import quality from '../About/Aboutimages/quality.jpeg'
import qualitys from '../About/Aboutimages/qualitys.png'
import trusts from '../About/Aboutimages/trusts.png'

function About(){
    return(
        <div className="container">
             <h2> About Us</h2>
        <div className='about'>
            
            <div>
              <img src={suubiabout} alt='About' className='aboutimage'></img>
            </div>
            <div>
                <div className='abouttext'><p >We have member tools which will enable your Sacco Member to save, borrow and  repay through their mobile phones. </p></div>
                
                {/* <br/> */}
                <h3> Our Core Values Are:</h3>
                <div className='values'>
                <p> <img src={trusts} alt=" trust" className='trust'/>  <b> Trust</b>  </p>
                <p> <img src={quality} alt=" Quality" className='quality'/> <b> Quality </b> </p>
                <p> <img src={qualitys} alt=" Efficiency" className='efficiency'/> <b> Efficiency</b>  </p>
                </div>
                
            </div>
        </div>
        </div>
       
    );
};
export default About