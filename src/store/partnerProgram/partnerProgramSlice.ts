import { createSlice } from '@reduxjs/toolkit';
import { PartnerProgram } from '../../interfaces/interfaces';

interface PartnerPrograms {
    isLoadingPartnerPrograms: boolean,
    programs: PartnerProgram[],
}
const partnerProgramState: PartnerPrograms = {
    isLoadingPartnerPrograms: false,
    programs: []
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
            state.programs = payload
        },
        onLogoutPartnerPrograms: (state) => {
            state.isLoadingPartnerPrograms = false,
            state.programs = []
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    onLoadPartnerPrograms,
    onSetPartnerPrograms,
    onLogoutPartnerPrograms
 } = partnerProgramSlice.actions;