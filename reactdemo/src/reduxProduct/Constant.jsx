export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const PRODUCT_ADD_SHOP = 'PRODUCT_ADD_SHOP';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const EMPTY_WISHLIST = 'EMPTY_WISHLIST';
export const WISHLIST_TO_CART = 'WISHLIST_TO_CART';
export const CART_TO_WISHLIST = 'CART_TO_WISHLIST';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const addProduct = (product) => {
  return {
    type: PRODUCT_ADD,
  };
};

export const updateProduct = (product) => {
  return {
    type: PRODUCT_UPDATE,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: PRODUCT_DELETE,
  };
};

export const addProductToShop = (product) => {
  return {
    type: PRODUCT_ADD_SHOP,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  };
};

export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
  };
};

export const removeFromWishlist = (productId) => {
  return {
    type: REMOVE_FROM_WISHLIST,
  };
};

export const emptyWishlist = () => {
  return {
    type: EMPTY_WISHLIST
  };
};

export const wishlistToCart = (productId) => {
  return {
    type: WISHLIST_TO_CART,
  };
};

export const cartToWishlist = (productId) => {
  return {
    type: CART_TO_WISHLIST,
    payload: productId
  };
};

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
