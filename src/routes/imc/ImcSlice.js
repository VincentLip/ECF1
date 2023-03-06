import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DE_DB } from "../../apiKey";



export const fetchImcs = createAsyncThunk (

    "imc/fetchImcs",

    async () => {

        const response = await fetch (`${BASE_DE_DB}imcs.json`)

        if(!response.ok){

            throw new Error ("Erreur lors de la récupération des données pour l'IMC !")
        }

        const data = await response.json()

        const tmpArray = []

        for (const key in data) {
            tmpArray.push({id:key , ...data[key]})
        }
        return tmpArray
    } 
)

export const addImc = createAsyncThunk(

    "imc/fetchImcs",

    async (imcValues, {getState}) => {

        const token = getState().auth.user.idToken

        if (token) {
            const response = await fetch(`${BASE_DE_DB}imcs.json?auth=${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(imcValues)
        })

        if (!response.ok) {
            throw new Error("Erreur lors de l'ajout des données pour l'IMC !")
        }

        const data = await response.json()

        return {id: data.name, ...imcValues}
        }
    }
)

const imcsSlice = createSlice({
    name: "imcs",
    initialState: {
        imcs: [],
        isLoading: false,
        error: null
    },
    extraReducers : (builder) => {
        builder.addCase(fetchImcs.pending, (state) => {
            state.imcs = []
            state.isLoading = true
            state.error = null
        })
    
        builder.addCase(fetchImcs.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    
        builder.addCase(fetchImcs.fulfilled, (state, action) => {
            state.isLoading = false
            state.imcs = action.payload
        })
    }
})

export default imcsSlice.reducer