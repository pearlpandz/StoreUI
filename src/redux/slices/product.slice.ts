import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('getProducts', async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const products = res.json();
        return products;
    } catch (error) {
        return 'Something went wrong';
    }
});

export const SidebarSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        data: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled , (state, action) => {
                state.status = 'success';
                state.data = action.payload;
                state.error = '';
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.data = [];
                console.log(action.payload);
                // state.error = action.payload;
            })
    }
    
});

// export const {} = SidebarSlice.actions;

export default SidebarSlice.reducer;