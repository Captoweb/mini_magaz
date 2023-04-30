import './Vivod.css';
import data from '../data/goods.json';

import React, {useState} from 'react';


function Vivod(props){

   const [count, setCount] = useState(0);
 

   const plus = () => {
    console.log(props.name);
  
     let temp = count;
     temp++;
     setCount(temp);
     console.log(props.img);
   }

   return(
        <div>        
            <div className="card" key={props.id_goods}>
                <a href="#">
                    <span>id: {props.id_goods}</span>
                    <div className="box-img">
                        <img className="img" src = {props.img} alt="item" />
                    </div>
                    <div className="card_description">
                        <h3 className="card__title">{props.name}</h3>
                        <p className="cart__text">{props.description}</p>
                    </div>
                    <div className="flex-wrapper">
                        <div className="price">{props.price} руб</div>
                        <button onClick={plus}>Добавить в корзину</button>
                        <div className="price">{count}</div>
                    </div>
                    
                </a>
            </div> 
        </div>
   );
   
}

export default Vivod;