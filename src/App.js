import logo from './logo.svg';
import './App.css';
import Vivod from './VivodTovarov/Vivod';
import data from './data/goods.json';
import React, {useState} from 'react';
import Cart from './Cart/Cart';


function App() {
  //console.log(data);

  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = () => {
    alert('123');
  }

  const plus = () => {
    // console.log(props.name);
  
     let temp = count;
     temp++;
     setCount(temp);
    //  console.log(props.img);
   }

  return (
    <div className="container">
       <div className="setka"> 
        {data.map((obj) => (
          <Vivod 
          id_goods={obj.id_goods} 
          name={obj.name} 
          description={obj.description} 
          price={obj.price} 
          img={obj.img} 
          key={obj.id_goods} 
          // plus = {plus}
          // count = {count}
          />
        ))}
      </div>
      <Cart items={cartItems} />
    </div>
   
  );
}

export default App;
