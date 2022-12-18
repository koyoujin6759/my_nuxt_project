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
    }
  };
  
  export const actions = {
    
  };
  