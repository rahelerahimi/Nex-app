'use client'
import React ,{ReactNode,useEffect} from 'react';
import { createContext, useState, useContext } from 'react';
import { MovieData ,MyContextType} from '../../component/type/type';


const MyContext = createContext<MyContextType | undefined>(undefined);


export function MyContextProvider({ children }:{children:ReactNode}) {


  const [cartData, setCartData] = useState<MovieData[]>([])
  const [showCart, setShowCart] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false);



  useEffect(() => {
    const cartDataString = localStorage.getItem('cartData');
    if (cartDataString) {
      const cartData = JSON.parse(cartDataString);
      setCartData(cartData);
    }
  }, []);
  

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };



  const addShowCart = (product:MovieData) => {
    setShowCart(true)
    const countProduct = cartData.find((element) => element.id === product.id)
    if (!countProduct) {
      setCartData([...cartData, { ...product, count: 1, price: 130 }])
    }
  }



  const addProducts = (product:MovieData) => {
    setCartData((prevCartData) => {
      const updatedCartData = [...prevCartData];
      const index = updatedCartData.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        updatedCartData[index].count += 1;
      } else {
        updatedCartData.push({ ...product, count: 1, price: 1000 });
      }
      localStorage.setItem('cartData', JSON.stringify(updatedCartData));
      return updatedCartData;
    });
  };
  



  const removeProduct = (product:MovieData) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.id === product.id
          ? { ...item, count:  item.count - 1 }
          : item
      ).filter((item) => item.count > 0 )
    );
  };
  
  const priceProduct = cartData.reduce((a, c) => a +  c.price *  c.count , 0);
  const totalProduct = priceProduct;


  const hideCard=()=>{
    setShowCart(false)
  }
 
  const contextValue: MyContextType = {
    cartData,
    showCart,
    modalOpen,
    setModalOpen,
    openModal,
    closeModal,
    addShowCart,
    addProducts,
    removeProduct,
    hideCard,
    totalProduct,
  };
  return (
    <MyContext.Provider value={contextValue} >
      {children}
    </MyContext.Provider>
  );
}


export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}