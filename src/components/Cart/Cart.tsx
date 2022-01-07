import React, {useState} from 'react';
import styles from './cart.module.scss';
import cartSymbol from '../../images/cartSymbol.png';
import imageProductA from '../../images/imageProductA.png';
import imageProductB from '../../images/imageProductB.png';
import imageProductC from '../../images/imageProductC.png';


const Cart = (): JSX.Element => {
  interface Product {
    id: string,
    image: string,
    description: string,
    price: number,
    status: boolean
  }

  const productList: Product[] = [
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

  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>(productList);

  const productsNumber: number = products
    .filter((product: Product): boolean => product.status).length;
  
  const totalPrice: number = products
    .map((product: Product): number => +product.status && product.price)
    .reduce((prev: number, curr: number): number => prev + curr);

  let cart: string = styles.cart;
  let circle: string = styles.circle;

  if (open) {
    cart += ` ${styles.cartOpen}`;
    circle += ` ${styles.square}`;
  }


  return(
    <div
      className={cart}
      onMouseEnter={(): void => setOpen(true)}
      onMouseLeave={(): void => setOpen(false)}
    >
      <div className={styles.line}></div>
      <div className={circle}>
        <img
          src={cartSymbol}
          className={styles.cartSymbol}
          alt='cart'
        />
      </div>
      <div className={styles.text}>cart ({productsNumber})</div>

      {open &&
        <div className={styles.dropdown}>
          <div className={styles.triangleOuter}>
            <div className={styles.triangleInner}></div>
          </div>

        {products.map((product: Product): false | JSX.Element => {
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
                onClick={(): void =>
                  //Error: duplicates the product, but must remove
                  setProducts([...products, {
                    id: product.id,
                    image: product.image,
                    description: product.description,
                    price: product.price,
                    status: false
                  }])
                }
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
