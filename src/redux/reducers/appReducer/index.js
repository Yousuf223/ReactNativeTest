
const INITIAL_STATE = {
  data: [],
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_Product':
      const { data } = states;
      const index = states?.data.findIndex(product => product.id === action?.payload?.id);
      if (index !== -1) {
       data[index].quantity += action?.payload.quantity;
      } else {
        data.push(action?.payload);
      } 
      return {
        ...states,
        data: [...data]
      }
      case 'DELETE_PRODUCT':
        const productId = action.payload;
        const updatedData = states.data.filter(product => product.id !== productId);
        return {
          ...states,
          data: updatedData
        };
    default:
      return states;
  }
};
