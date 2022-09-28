import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import apiRequest from "../../apiRequest";

const API_URL = 'http://localhost:3500/products';

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        try {
            const response = await fetch(API_URL);
            const products = await response.json();
            return products
        } catch (err) {
            console.log(err)
        }
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (postOptions) => {
        try {
            const response = await fetch(API_URL, postOptions);
            const product = response.json();
            return product;
        } catch (err) {
            console.log(err.stack)
        }   
    }
)

export const editProducts = createAsyncThunk(
    'products/editProducts',
    async ({editOptions, id}) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, editOptions);
            const products = response.json();
            return products;
        } catch (err) {
            console.log(err.stack)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async ({deleteOptions, id}) => {
        try {
            const response = await apiRequest(`${API_URL}/${id}`, deleteOptions);
            console.log(response);
            const products = response.json();
            return products
        } catch (err) {
            console.log(err.stack)
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: true,
        isAdding: false,
        loadingError: false
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.loadingError = false;
                state.products = action.payload;
            })
            .addCase(loadProducts.rejected, (state) => {
                state.loadingError = true;
                state.isLoading = false;
            })
            .addCase(addProduct.pending, (state) => {
                state.isAdding = true;
                state.loadingError = false;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isAdding = false;
                state.loadingError = false;
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state) => {
                state.isAdding = false;
                state.loadingError = true;
            })
    }
})

export const selectProducts = state => state.products.products;
export const selectIsLoading = state => state.products.isLoading;

export const { setProducts, setIsLoading } = productsSlice.actions;

export default productsSlice.reducer;