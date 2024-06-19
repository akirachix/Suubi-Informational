import  './index.css'
import suubiabout from '../aboutimages/suubiabout.png'
import quality from '../aboutimages/quality.jpeg'
import qualitys from '../aboutimages/qualitys.png'
import trusts from '../aboutimages/trusts.png'

function About(){
    return(
        <div className="container">
             <h2> About Us</h2>
        <div className='about'>
            
            <div>
              <img src={suubiabout} alt='About' className='aboutimage'></img>
            </div>
            <div>
                <p className='abouttext'>We have member tools which will enable<br/> your Sacco Member to save, borrow and <br/> repay through their mobile phones. </p>
                <br/>
                <h3> Our Core Values Are:</h3>
                <div className='values'>
                <p> <img src={trusts} alt=" trust" className='trust'/>  Trust </p>
                <p> <img src={quality} alt=" Quality" className='quality'/> Quality </p>
                <p> <img src={qualitys} alt=" Efficiency" className='efficiency'/> Efficiency </p>
                </div>
                
            </div>
        </div>
        </div>
       
    );
};
export default About