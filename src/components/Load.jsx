import React, {useRef} from 'react';
import florida from '../assets/florida.jpg';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import{ useReactToPrint } from 'react-to-print'


function Load() {
    let navigate = useNavigate();

    const handleSubmit = () => {
            navigate("/CertificatePrint");
    };

  return (
    <div className='app2'>
            <div className='house'>
                <div className='inner2'>
                <a href='http://dos.myflorida.com'>
                    <img src={florida} alt="florida" /></a>
                        <a className=' cors7' href='http://dos.myflorida.com/sunbiz/'>
                            DIVISION OF CORPERATIONS
                        </a>   
                </div>
                <div className="centerr2">
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
                    <div className="bord1">
                    <p>Certificate of Status Authentication</p>
                     <div className="bord2">
                    <p>The certificate number you provided is authentic<br />
                    The following link contains the actual certificate that was issued by the Department of State</p>
                        <div className='up2'>
                    <button className='bors' onClick={handleSubmit}>http://certificate.sunbiz.org/certificate/CC6100041337.pdf</button>
                    </div>
                    </div> 
                     </div>
                    </div>
                <div className="centerr1">
                   <p>Florida Department of State, Division of Corporations</p>
                    </div>
            </div>
            </div>
  )
}

export default Load;