' use client '
import React from 'react'
import styles from './card.module.css';
import Image from 'next/image';
import { useMyContext } from '../../../app/context/theme';
import { MdOutlineClose } from "react-icons/md";
import { BsCartX } from 'react-icons/bs'
import { MovieData } from '../../type/type';


const Card = () => {


     const { showCart, cartData, addProducts, removeProduct, totalProduct, hideCard } = useMyContext()

     return (
          <>

               <div className={showCart ? styles.curtainCart : styles.hideCurtainCart}></div>
               <div className={showCart ? styles.showCart : styles.parentCard}>

                    <p onClick={hideCard} className={styles.closeCart}><MdOutlineClose /></p>
                    {cartData.length === 0 ? (
                         <>
                              <p className={styles.cartEmpty}>cart is empty</p>
                              <div className={styles.cartEmptyImage}><BsCartX /></div>
                         </>
                    ) : (
                         <>
                              <div className={styles.cartLengthStyle}>you have {cartData.length} product in basket</div>
                              {cartData.map((item: MovieData) => (
                                   <div key={item.id} className={styles.mapCart}>
                                        <div>
                                             <Image src={item.poster} alt={item.title} width={200} height={100} priority={true} />
                                             <p>{item.title}</p>
                                             <p>price {item.price}$</p>
                                        </div>
                                        <div className={styles.parentCount}>
                                             <button onClick={() => removeProduct(item)}>-</button>
                                             <p>{item.count}</p>
                                             
                                             <button onClick={() => addProducts(item)}>+</button>
                                        </div>
                                   </div>
                              ))}
                              <p className={styles.total}>
                                   <span>total:</span> <span>{totalProduct}$</span>
                              </p>
                              <button className={styles.cartLengthStyle}>checkout</button>
                         </>
                    )}

               </div>

          </>
     )
}

export default Card