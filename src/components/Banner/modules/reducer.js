import { UPDATE_BANNER } from "./types";

const initialState = {
    banner: {
      
    },
    isHome: true
};

const bannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BANNER:
    
      return { ...state, banner: {...payload.banner}, isHome: payload.isHome};

    default:
      return state;
  }
};

export default bannerReducer;
