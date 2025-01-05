import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext({ addToCart: () => {} });



export const ShopContextProvider = (props) => {
  const [list, setList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setList(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  

  useEffect(() => {
    // Initialize the cartItems object based on fetched products
    if (list.length > 0) {
      const initialCart = {};
      list.forEach((product) => {
        initialCart[product.id] = 0;
      });
      setCartItems(initialCart);
    }
  }, [list]);
  
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < list.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart());

  console.log(222,cartItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = list.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    const initialCart = {};
    list.forEach((product) => {
      initialCart[product.id] = 0;
    });
    setCartItems(initialCart);
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
