import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";
import ImcSlice from "./routes/imc/ImcSlice";

const store = configureStore ({

    reducer: {
        auth: authSlice,
        imcs : ImcSlice
        
    }
})

export default store