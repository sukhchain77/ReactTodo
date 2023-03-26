import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Counter from './Components/Counter/Counter';
import List from './Components/List/List';
import Todo from './Components/Todo/Todo';
import Input from './Components/ParentChild/Input';
import Text from './Components/ChildParent/Text';
import Nav from './Components/State_API/Nav';
import Profile from './Components/State_API/Profile';
import Timer from './Components/Timer/Timer';
//import Form from './Components/Form/Uncontrolled';
import Form from './Components/Form/Controlled';
import A from './Components/Context/A';
import Home from './Components/Home/Home';
import Auth from './Components/Auth';
import { useState } from 'react';
import { loginContext } from './Components/Context/Context';
import { Route,Routes } from 'react-router-dom';
import PagenotFound from './Components/PNF/PahenotFound';
import Product from './Components/Product';
import Electronics from './Components/Electronics';
import Jwellery from './Components/Jwellery';
import { Navigate } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import PrivateRouter from './Components/PrivateRouter';


function App() {
  const [state, setState] = useState({
    isloggedIn : false,
    user: "Guest User"
  });

  const floggedIn = (data) =>{
     setState(data);
  }
  const floggedOut = () =>{
    setState({
      isloggedIn : false,
      user: "Guest User"
    });
 }

  return (
    <div className="App">
      <loginContext.Provider value={{state,floggedIn,floggedOut}}>
        <Nav/>
        {/* <Auth /> */}
      </loginContext.Provider>
      <Routes>
      <Route path='/' element ={<Home />} />
      {/* <Route path='/profile' element ={state.isloggedIn ? <Profile /> : <Navigate to ="/"/> } /> */}
      {/* <Route path='/profile' element ={<Profile /> } /> */}
      <Route path='/profile' element ={<PrivateRouter > <Profile /></PrivateRouter> } />
      <Route path='/todo' element ={<Todo />} />
      <Route path='/counter' element ={<Counter />} />
      <Route path='/product' element ={<Product />} >
         <Route path='' element={ <Navigate to ="electronic" /> } />
         <Route path='electronic' element ={<Electronics />} />
         <Route path='jwellery' element ={<Jwellery />} />
         
      </Route>
      <Route path='/productdetails/:id' element ={<ProductDetail />} />
      <Route path='*' element ={<PagenotFound />} /> 
      </Routes>
      
      
      {/* <Home /> */}
      {/* <A/> */}
      {/* <Form /> */}
      {/* <Form /> */}
      {/* <Timer/> */}
      {/* <Profile /> */}
      {/* <Text />
       <Input /> 
       <Todo />*/}
      {/* <Counter /> */}
      {/* <List /> */}
      <Footer /> 
    </div>
  );
}

export default App;
