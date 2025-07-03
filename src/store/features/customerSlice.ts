import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
}

interface CustomerState {
  details: CustomerDetails | null;
}

const initialState: CustomerState = {
  details: null,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomerDetails: (state, action: PayloadAction<CustomerDetails>) => {
      state.details = action.payload;
    },
    clearCustomerDetails: (state) => {
      state.details = null;
    },
  },
});

export const { setCustomerDetails, clearCustomerDetails } = customerSlice.actions;

export default customerSlice.reducer;
