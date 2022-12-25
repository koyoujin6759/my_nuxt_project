import { fetchCartItems } from "../mixin/api";

//constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'


export const state = () => ({
    cartItems: [],
  });
  
  export const getters = {
    
  };
  
  export const mutations = {
    addCartItem(state, cartItem) {
      state.cartItems.push(cartItem)
      const newCartItem = {
        ...cartItem,
        imageUrl:`${cartItem.imageUrl}?random=${Math.random()}`,  
      }
      state.cartItems.push(newCartItem)
    },
    setCartItems(state,cartItems) {
        state.cartItems = cartItems;
    }
  };
  
  export const actions = {
    async [FETCH_CART_ITEMS] ({commit}) {
      const {data} = await fetchCartItems();
      commit('setCartItems',data)
    //   console.log(response);
    }
  };
  