const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cardSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer
    }
});

export default appStore;