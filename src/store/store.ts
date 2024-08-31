import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface DataState {
  data: Array<any>;
  loading: boolean;
}

const initialState: DataState = {
  data: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk('data/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return response.json();
});


export const usersData = createSlice({
    name: 'users',
    initialState,
    reducers: {
        showData(state) {
            console.log(state.data);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const store = configureStore({
  reducer: {
   users: usersData.reducer,
  },
});

// Типизация стейта и диспетчера
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;