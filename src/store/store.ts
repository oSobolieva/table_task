import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface DataState {
  mainData: Array<User>;
  data: Array<User>;
  loading: boolean;
}

const initialState: DataState = {
    mainData: [],
    data: [],
    loading: false,
};

export const fetchUsers = createAsyncThunk('data/fetchUsers', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  } catch (error: unknown) {  
  if (error instanceof Error) {  
    throw new Error(error.message || 'An error occurred');
  } else {
    throw new Error('An unknown error occurred');
  }
}
});



export const usersData = createSlice({
    name: 'users',
    initialState,
    reducers: {
        filterData(state, action) {
            state.data = state.mainData.filter(item => 
                Object.values(item).some(value => {
                    if (typeof value === 'string' || typeof value === 'number') {
                        return value.toString().toLowerCase().includes(action.payload.toLowerCase());
                    }
                    return false;
                })
            )
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.mainData = action.payload;
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { filterData } = usersData.actions;

export const store = configureStore({
  reducer: {
   users: usersData.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;