import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from"axios"
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url ="http://localhost:4000"
  const [token,setToken]=useState("");
  const [food_list,setFoodList]=useState([])

  const addToCart = async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
       
    }
  };
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };
  const getTotal = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartItems[item];
      }
    }
    return totalamount;
  };
  const fetchfoodlist= async()=>{
    const response= await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }
  const loadcartdata=async(token)=>{
    const response =await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
  }

  useEffect(()=>{

    async function loaddata() {
      await fetchfoodlist();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadcartdata(localStorage.getItem("token"))
      }
    }
    loaddata();
  },[])
  const contextvalue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotal,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
