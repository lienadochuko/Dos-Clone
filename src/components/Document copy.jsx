import React, {useRef} from 'react';
import{ useReactToPrint } from 'react-to-print'
import header from '../assets/header.png';
import subpar from '../assets/subpar.png';
import logos from '../assets/logos.png';
import subfot1 from '../assets/subfot1.png'


function Documentcopy() {

    class ComponentToPrint extends React.Component{
        render(){
                return(
                    <div className='dup'>
                        <div className='bore'>
                     <img src={header} />
                     <p>I certify from the records of this office that AMERIDAV, INC. is a
                         <br />corporation organized under the laws of the State of Florida, filed on October
                         <br />31, 2013.</p>
                         <p>The document number of this corporation is N13000229905.</p>
                         <p>I further certify that said corporation has paid all fees due this office through
                             <br />December 30, 2016, that its most recent annual report/uniform business report
                             <br />was filed on January 4, 2016, and that its status is active.</p>
                             <p>I further certify that said corporation has not filed Articles of Dissolution.</p>
                             <div className='borez'>
                             <div className='bores'>
                             <img src={subpar} />
                             </div>
                             <div className='bored'>
                             <img src={logos} />
                             </div>
                             </div>
                             <div className='borer'>
                             <img src={subfot1} /> 
                             </div>
                     </div>
                     </div>
                );
        }
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

  return (
    <div className='app3'>
            <ComponentToPrint ref={componentRef} />
                    <button onClick={handlePrint}>print</button>
            </div>
  )
}

export default Documentcopy;