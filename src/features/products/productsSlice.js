import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { buildQueries } from "@testing-library/react";

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

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        loadingError: false
    },
    reducers: {},
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
    }
})

export const selectProducts = state => state.products.products;

export default productsSlice.reducer