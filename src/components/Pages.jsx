import React from "react";
import { useEffect } from "react";
import florida from '../assets/florida.jpg'
import logo from '../assets/logo.png'
import stop_sign from '../assets/stop_sign.jpg'
import { useNavigate } from "react-router-dom";


const initialFormData = {
    codet:''
}

const Pages = () => {
    let navigate = useNavigate();
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) =>{
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = () => {
        let userInput = document.getElementById('ere');
        if (userInput.value == 'CC6100041337'){
            navigate("/CertificateAuthentication");
        }else if(userInput.value == 'CC6100041447'){
            navigate("/CertificateAuthentications");
        }else{
            alert('Pls input a registered Number');
        }
       /* e.preventDefault();
            return{
                useEffect}
            */
    };
    /*useEffect(() => {
        if(formData!=''){
            alert('bubble');
        }else{
            console.log(formData);
        }
    });*/

return(
    <div className='app1'>
            <div className='house'>
                <div className='inner'>
                <a href='http://dos.myflorida.com'>
                    <img src={florida} alt="florida" /></a>
                        <a className=' cors7' href='http://dos.myflorida.com/sunbiz/'>
                            DIVISION OF CORPERATIONS
                        </a>   
                </div>
                <div className="centerr">
                    <div className="liblue">
                    <img src={logo} alt="logo"/>
                    </div>
                    <div className="rim1" >
                        <a  className=' cors' href='http://dos.myflorida.com/'>
                            Department of State
                        </a>
                        <a  className=' cors0' href=''>
                            /
                        </a> 
                        <a  className=' cors' href='http://dos.myflorida.com/sunbiz/'>
                            Division of corperations
                        </a> 
                        <a  className=' cors0' href=''>
                            /
                        </a> 
                        <a  className=' cors' href='http://dos.myflorida.com/sunbiz/manage-business/efile/'>
                            Manage/Change with E-Filing
                        </a> 
                        <a  className=' cors0' href=''>
                            /
                        </a> 
                    </div>
                    <div className="bord">
                    <p>Certificate of Status Authentication</p>
                    <div className="liblue2">
                    <div className="birg2">
                        <p>Disclaimer</p>
                        </div>
                    <div className="birg3">
                    <img src={stop_sign} alt='stop_sign'/>
                    </div>
                    <div className="birg4">
                        <p>This form verifies a Certificate of Status only.</p>
                    </div>
                    </div>
                    <div className="forms">
                     <form>
                         <div className="forms1">
                         <label>
                             Tracking Number
                          </label>
                          </div>
                          <div className="forms0">
                          <input id='ere' name='codet' onChange={handleChange}>
                          </input>
                          </div>
                         <div className="forms3">
                         <label>
                         <b>Note</b>:The tracking number is printed at the bottom of the certificate of status.
                          </label>
                          </div>
                          <div className="forms2">
                             <button onClick={handleSubmit}>Submit</button>
                        </div>
                     </form>
                     </div>
                     </div>
                    </div>
                <div className="centerr1">
                   <p>Florida Department of State, Division of Corporations</p>
                    </div>
            </div>
            </div>
      );
};

  export default Pages;