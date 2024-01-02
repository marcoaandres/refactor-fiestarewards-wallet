
import { createSlice } from '@reduxjs/toolkit';
import { Promotion } from '../../interfaces/interfaces';

interface promotion {
    isLoadingPromotions: boolean,
    promotions: Promotion[],
}
const promotionState: promotion = {
    isLoadingPromotions: false,
    promotions: []
}
export const promotionSlice = createSlice({
    name: 'promotion',
    initialState: promotionState,

    reducers: {
        onLoadPromotions: (state) => {
            state.isLoadingPromotions = true
        },
        onSetPromotions: (state, {payload}) => {
            state.isLoadingPromotions = false
            state.promotions = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onLoadPromotions, 
    onSetPromotions, 
} = promotionSlice.actions;