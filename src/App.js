import { BrowserRouter, Routes, Route }  from 'react-router-dom'

// import global style
import './App.css';

// pages
import Homepage from './pages/homepage/Homepage';
//import Project from './pages/project/Project';
//import Login from './pages/login/Login';
//import Signup from './pages/signup/Signup';
import Header from './component/header/Header';
import SideBar from './component/sidebar/SideBar';
//import FetchData from './component/fetchdata/FetchData';
//import Stripe from './pages/stripe/Stripe';
import Complete from './component/complete/Complete';
import Payment from './component/payment/Payment';
import MuleApi from './component/muleapi/MuleApi';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div className='app-container'>
          <Header />
            <Routes>
                <Route exact path="/" element={<Homepage />} />   
                <Route path="/complete" element={<Complete />} />
                <Route path="/payment" element={<Payment />} />    
                <Route path="/api" element={<MuleApi />} />      
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
