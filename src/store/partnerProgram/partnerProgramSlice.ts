import { createSlice } from '@reduxjs/toolkit';
import { ResponsePartnerPrograms } from '../../interfaces/interfaces';

interface partnerProgram {
    isLoadingPartnerPrograms: boolean,
    partnerPrograms: ResponsePartnerPrograms[],
}
const partnerProgramState: partnerProgram = {
    isLoadingPartnerPrograms: false,
    partnerPrograms: []
}


export const partnerProgramSlice = createSlice({
    name: 'partnerProgram',
    initialState: partnerProgramState,
    reducers: {
        onLoadPartnerPrograms: (state) => {
            state.isLoadingPartnerPrograms = true
        },
        onSetPartnerPrograms: (state, {payload}) => {
            state.isLoadingPartnerPrograms = false
            state.partnerPrograms = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onLoadPartnerPrograms,
    onSetPartnerPrograms,
 } = partnerProgramSlice.actions;