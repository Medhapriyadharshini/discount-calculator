import './App.css';
import Header from './Header';
import {MDBCard,MDBCardBody} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import { MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { FormCheck } from 'react-bootstrap';

function App() {

  const [amount,setAmount]=useState(0)
  const [discount,setDiscount]=useState(0)
  const [payamnt,setPayamnt]=useState(0)
  const [savedamnt,setSavedamnt]=useState(0)

  console.log(amount,discount);

const check=(e)=>{
const discountamount=amount*discount/100;
const amntpay=amount-discountamount;
setPayamnt(amntpay);
setSavedamnt(discountamount);
}

const reset=(e)=>{
  setAmount(0);
  setDiscount(0);
  setPayamnt(0);
  setSavedamnt(0);

}

  return (
    <div className="App">
      <Header/>
    <div>
        <MDBCard style={{margin:'50px',padding:'40px'}}>
      <MDBCardBody >
<h1 style={{textAlign:'center',fontWeight:'600'}}>Discount Calculator</h1>
<p style={{textAlign:'center',marginBottom:'50px'}} >Check the discount amount of the product</p>
<div className="row">
    <div className="col-5 " style={{marginLeft:'150px'}}>
    <Card className='border border-primary'  style={{ width: '28rem' }}>
        <Card.Header style={{textAlign:'center',fontSize:'26px',fontWeight:'600',color:'darkblue'}}>Product Discount Details</Card.Header>
        <Card.Body>
        <MDBInput style={{marginBottom:'20px'}} value={amount||""} label='Enter Amount' onChange={(e)=>setAmount(e.target.value)}  id='formControlLg' type='text' size='lg' />
        <MDBInput  style={{marginBottom:'50px'}}  value={discount||""} label='Discount %' onChange={(e)=>setDiscount(e.target.value)} id='formControlLg' type='text' size='lg' />
        <button  className='btn btn-primary form-control' onClick={check}>Check</button>
        </Card.Body>
    </Card>
    </div>
    
<div className="col-2" style={{marginRight:'170px'}}>
<Card className='border border-success' style={{ width: '28rem' }}>
        <Card.Header style={{textAlign:'center',fontSize:'23px',fontWeight:'600',color:'darkblue',marginBottom:'20px'}}>Discount Amount & Saved Amount</Card.Header>
        <Card.Body>
        
        <div className='result border border-dark rounded-5 mx-4 p-1 mb-3 '><h5 >Pay Amount : &#8377; {payamnt}</h5></div>
        <div className=' result border border-dark rounded-5 mx-4  p-1 mb-5'><h5>Saved Amount : &#8377; {savedamnt}</h5></div>
       

        <button  className='btn btn-primary form-control' onClick={reset}>Reset</button>
        </Card.Body>
    </Card>
</div>

<h3 style={{textAlign:'center',marginTop:'40px',fontWeight:'800',color:'red',marginBottom:'20px'}}>You saved : &#8377; {savedamnt}</h3>

</div>     
      </MDBCardBody>
    </MDBCard>
    </div>

    </div>
  );
}

export default App;
