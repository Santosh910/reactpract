
import './App.css';
import { Routes,Route } from "react-router-dom";
import Homepage from './component/Practice/Homepage';
import Login from './component/Practice/Login';
import Register from './component/Practice/Register';
import Effect1 from './component/Effect1';
import Effect2 from './component/Practice/Effect2';
import Effect3 from './component/Practice/Effect3';
import Effect4 from './component/Practice/Effect4';
import SingleProduct from './component/Practice/SingleProduct';
import Params from './component/Practice/Params';
import Mapping from './component/Practice/Mapping';
import Ternary from './component/Practice/Ternary';
import { useState } from 'react';
import StyleComponent from './component/Practice/StyleComponent';
import Counterse from './component/Practice/Counterse';
import DynamicStyle from './component/Practice/DynamicStyle';
import ChildrenProp from './component/Practice/ChildrenProp';
import Register2 from './component/Practice/Register2';
import PageNotFound from './component/Practice/PageNotFound';
import SingleProductNow from './component/Practice/SingleProductNow';
import Products from './component/Practice/Products';
import AddProduct from './component/Practice/AddProduct';
import UseReducer from './component/Practice/UseReducer';
import TestReducer from './component/Practice/TestReducer';

function App() {
  const[loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
     <Routes>
      <Route exact path='*' element={<PageNotFound/>}/>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/effect1' element={<Effect1/>}/> 
      <Route exact path='/effect2' element={<Effect2/>}/> 
      <Route exact path='/effect3' element={<Effect3/>}/> 
      <Route exact path='/effect4' element={<Effect4/>}/> 
      <Route exact path='/params' element={<Params/>}/> 
      <Route exact path='/singleProduct/:id' element={<SingleProduct/>}/> 
      <Route exact path='/mapping' element={<Mapping names={["santosh","ruu","suns"]}/>} />
      <Route exact path='/ternary' element={<Ternary IsUserLoggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
      <Route exact path='/stylecomponent' element={<StyleComponent/>}/>
      <Route exact path='/counterse' element={<Counterse/>}/>
      <Route exact path='/dynamic-style' element={<DynamicStyle />}/>
      <Route exact path='/children-prop' element={<ChildrenProp/>}/>
      <Route exact path='/register2' element={<Register2/>}/>
      <Route exact path='/single-product/:id' element={<SingleProductNow/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/add-product' element={<AddProduct/>}/>
      <Route exact path='/useReducer' element={<UseReducer/>}/>
      <Route exact path='/testReducer' element={<TestReducer/>}/>
     </Routes>
    </div>
  ); 
}

export default App;
