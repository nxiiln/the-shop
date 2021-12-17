import React, {useState} from 'react';
import styles from './cart.module.scss';
import cartSymbol from '../../images/cartSymbol.png';
import product1 from '../../images/product1.png';
import product2 from '../../images/product2.png';
import product3 from '../../images/product3.png';


const Cart = () => {
  const [open, setOpen] = useState(false);
  const [productA, setProductA] = useState(true);
  const [productB, setProductB] = useState(true);
  const [productC, setProductC] = useState(true);

  const productList = [productA, productB, productC];
  let productValue = productList.filter(product => product).length;

  const price = {
    productA: productA && 275,
    productB: productB && 1875,
    productC: productC && 159
  };

  let totalPrice = 0;
  for (let key in price) {
    totalPrice += price[key];
  }

  let cart = styles.cart;
  let circle = styles.circle;
  let text = styles.text;

  if (open) {
    cart += ` ${styles.cartOpen}`;
    circle += ` ${styles.square}`;
    text += ` ${styles.textOpen}`;
  }


  return(
    <div
      className={cart}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={styles.line}></div>
      <div className={circle}>
        <img
          src={cartSymbol}
          className={styles.cartSymbol}
          alt='cart'
        />
      </div>
      <div className={text}>cart ({productValue})</div>


      {open &&
        <div className={styles.dropdown}>
          <div className={styles.triangleOuter}>
            <div className={styles.triangleInner}></div>
          </div>


          {productA &&
            <div className={styles.product}>
              <img
                src={product1}
                className={styles.product1Image}
                alt={product1}
              />
              <div className={styles.description}>
                detailed swing dress
              </div>
              <div className={styles.price}>
                ${price.productA}
              </div>
              <button 
                className={styles.close}
                type='button'
                onClick={() => setProductA(false)}
              >
                <div className={styles.x}>+</div>
              </button>
            </div>
          }


          {productB &&
            <div className={styles.product}>
              <img
                src={product2}
                className={styles.product1Image}
                alt={product2}
              />
              <div className={styles.description}>
                maxararzy frilled dress
              </div>
              <div className={styles.price}>
                ${price.productB}
              </div>
              <button 
                className={styles.close}
                type='button'
                onClick={() => setProductB(false)}
              >
                <div className={styles.x}>+</div>
              </button>
            </div>
          }


          {productC && 
            <div className={styles.product}>
              <img
                src={product3}
                className={styles.product1Image}
                alt={product3}
              />
              <div className={styles.description}>
                detailed frilled dress
              </div>
              <div className={styles.price}>
                ${price.productC}
              </div>
              <button 
                className={styles.close}
                type='button'
                onClick={() => setProductC(false)}
              >
                <div className={styles.x}>+</div>
              </button>
            </div>
          }


          <div className={styles.result}>
            <div className={styles.total}>
              TOTAL:
            </div>
            <div className={styles.totalPrice}>
              ${totalPrice}
            </div>
            <button
              className={styles.viewCart}
              type='button'
            >
              view cart
            </button>
            <button
              className={styles.checkout}
              type='button'
            >
              checkout
            </button>
          </div>
        </div>
      }
    </div>
  );
}


export default Cart;
