// src/redux/packageSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface Package {
  title: string;
  price: number;
  features: string[];
}

interface PackageState {
  selectedPackage: Package | null;
}

const initialState: PackageState = {
  selectedPackage: null,
};

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    setSelectedPackage: (state, action: PayloadAction<Package>) => {
      state.selectedPackage = action.payload;
    },
  },
});

export const { setSelectedPackage } = packageSlice.actions;
export default packageSlice.reducer;
