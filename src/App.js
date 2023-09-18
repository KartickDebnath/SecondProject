import  EcomNavbar from './Routing/Pages/EcomNavbar.jsx';
import  Home from './Routing/Pages/Home.jsx';
import Phone from './Routing/Pages/Phone.jsx';
import Laptop from './Routing/Pages/Laptop.jsx';
import HeadPhone from './Routing/Pages/HeadPhone.jsx';
import Furniture from './Routing/Pages/Furniture.jsx';
import Fridge from './Routing/Pages/Fridge.jsx';
import Shoe from './Routing/Pages/Shoe.jsx';
import SmartTV from './Routing/Pages/SmartTV.jsx';
import Smartwatch from './Routing/Pages/Smartwatch.jsx';
import './App.css'

import  Register from  './Routing/Pages/Register.jsx'
import  Login from  './Routing/Pages/Login.jsx'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App(){
  return(
  <>
  
    <Router>
    <div className="container">
    

<EcomNavbar/>

{/* icon */}
<main>
  <div style={{marginTop:50}}>
<div className= "main">

<div className='main1' style={{display:'flex',flexDirection:'row'}}>
 <div> 
<img src="https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=70" className="rounded float-left" alt="..." style={{height:'59px',marginLeft:'45px',marginTop:'27px'}}></img>
<div  style={{marginTop:'30px',marginLeft:'45px'}}>
<Link to={'phone'} className='main2'>Phone</Link>
</div>
</div>

 <div>         
<img src='https://rukminim1.flixcart.com/image/312/312/kynb6vk0/computer/k/j/a/-original-imagaufne7h4hgbz.jpeg?q=70'  className="rounded float-left" alt=''style={{height:'60px',marginLeft:'56px',marginTop:'27px'}}/>
<div  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'laptop'} style={{marginLeft:'44px'}}>Laptop</Link>
</div>
</div>

<div>
<img src='https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70'  className="rounded float-left" alt=''style={{height:'80px',marginLeft:'65px',marginTop:'10px'}}/>
<div  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'headphone'} style={{marginLeft:'35px'}}>Headphone</Link>
</div>
</div>

<div>
<img src="https://rukminim1.flixcart.com/image/612/612/ju04akw0/rocking-chair/f/t/a/1-seater-rosewood-sheesham-sd95-allie-wood-mahogany-finish-original-imaff5sdabb6hzfa.jpeg?q=70"  className="rounded float-left" alt="" style={{height:'80px',marginLeft:'65px',marginTop:'20px'}}/>
<div className='main4'  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'furniture'} style={{marginLeft:'40px',}}>Furniture</Link>
</div>
</div>

<div>
<img src="https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/f/m/d/hed-204mfb-p-1313-4-2023-38-haier-628-541-original-imagmvfzvkrfnrwe.jpeg?q=70"  className="rounded float-left" alt="" style={{height:'70px',marginLeft:'70px',marginTop:'25px'}}/>
<div  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'fridge'} style={{marginLeft:'40px'}}>Fridge</Link>
</div>
</div>

<div>
<img src="https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/0/n/i/10-385881-10-puma-black-asphalt-original-imaghhrzeu6edfft.jpeg?q=70"  className="rounded float-left" alt="" style={{height:'60px',marginLeft:'60px',marginTop:'30px'}}/>
<div  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'shoe'} style={{marginLeft:'60px'}}>Shoe</Link>
</div>
</div>

<div>
<img src="https://rukminim1.flixcart.com/image/612/612/xif0q/smartwatch/b/e/t/-original-imagnuu8mfzfsfdz.jpeg?q=70"   className="rounded float-left" alt="" style={{height:'60px',marginLeft:'54px',marginTop:'30px'}}/>
<div  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'smartwatch'} style={{marginLeft:'20px'}}>Smartwatch</Link>
</div>
</div>

<div>
<img src="https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70" className="rounded float-left" alt="" style={{height:'60px',marginLeft:'59px',marginTop:'30px'}}/>
<div  style={{marginTop:'30px',marginLeft:'20px'}}>
<Link to={'Smarttv'} style={{marginLeft:'50px'}}>SmartTV</Link>
</div>
</div>
</div>


</div>

{/* </div>  */}
</div>
</main>





 </div>

 <br/><br/>
 
          <Routes>
         <Route path="/home" element={<Home/>} />
         <Route path='phone' element={<Phone />}/>
          <Route path="laptop" element={<Laptop/>} /> 
          <Route path="headphone" element={<HeadPhone/>} />
          <Route path="furniture" element={<Furniture/>} />
          <Route path="fridge" element={<Fridge/>} />
          <Route path="shoe" element={<Shoe/>} /> 
          <Route path="smartwatch" element={<Smartwatch/>} /> 
          <Route path="Smarttv" element={<SmartTV/>} />   
         

         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         
         
       </Routes>
     </Router>
     <Home/>


       </>
  )
}
export default App;

