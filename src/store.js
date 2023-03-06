import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";
import ImcsSlice from "./routes/imc/ImcsSlice";

const store = configureStore ({

    reducer: {
        auth: authSlice,
        imcs : ImcsSlice
        
    }
})

export default store