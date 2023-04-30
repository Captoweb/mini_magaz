import './Cart.css';
// import data from '../data/goods.json';


function Cart({ items=[] }) {
    return(
        <div className="cart-wrapper">
            <div className="container">
            <h2 className="main-title">Корзина</h2>
            <div className="cart">
        

                {items.map((obj)=>(
                    <div className="cart__item" key={obj.id_goods}>
                        <div className="cart__item-img">
                            <img src={obj.img} alt="" />
                        </div>
                        <div className="cart__item-wrapper">
                            <div className="cart__item-title">
                                <p>{obj.name}</p>
                            </div>
                            <div className="item-count-wrapper">
                                <div className="cart__item-count">
                                    <span><img src="images/minus2.svg" /></span>1<span><img src="images/plus2.svg" /></span>
                                </div>
                                <div className="cart__item-price">
                                    {obj.price}
                                </div>
                            </div>
                        </div>
                        <div className="cart__item-delete">
                            <img src="images/close.svg" />
                    </div>
                </div>
                ))}
        

            </div>
        
            <div>
                <div>Итого: 880 ₽ ( по правому краю выровнять )</div>
                
            </div>

            </div>
    
        </div>
    );
}

export default Cart;