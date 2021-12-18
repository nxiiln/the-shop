import React, {useState} from 'react';
import styles from './cart.module.scss';
import cartSymbol from '../../images/cartSymbol.png';
import imageProductA from '../../images/imageProductA.png';
import imageProductB from '../../images/imageProductB.png';
import imageProductC from '../../images/imageProductC.png';


const Cart = () => {
  let productList = [
    {
      id: 'productA',
      image: imageProductA,
      description: 'detailed swing dress',
      price: 275,
      status: true
    },
    {
      id: 'productB',
      image: imageProductB,
      description: 'maxararzy frilled dress',
      price: 1875,
      status: true
    },
    {
      id: 'productC',
      image: imageProductC,
      description: 'detailed swing dress',
      price: 159,
      status: true
    }
  ];

  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(productList);

  let productNumber = products.filter(product => product.status).length;
  let totalPrice = products.reduce((prev, curr) => {
    return(
      curr.status && prev + curr.price
    );
  }, 0);

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
      <div className={text}>cart ({productNumber})</div>

      {open &&
        <div className={styles.dropdown}>
          <div className={styles.triangleOuter}>
            <div className={styles.triangleInner}></div>
          </div>

        {products.map(product => {
          return(product.status &&
            <div
              className={styles.product}
              key={product.id}
            >
              <img
                src={product.image}
                className={styles.productImage}
                alt='productPreview'
              />
              <div className={styles.description}>
                {product.description}
              </div>
              <div className={styles.price}>
                ${product.price}
              </div>
              <button 
                className={styles.close}
                type='button'
                onClick={() => {
                  setProducts([...products], product.status = false);
                }}
              >
                <div className={styles.x}>+</div>
              </button>
            </div>
          );
        })}

          <div className={styles.result}>
            <div className={styles.total}>
              TOTAL:
            </div>
            <div className={styles.totalPrice}>
              ${totalPrice ? totalPrice : 0}
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
