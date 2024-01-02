import { createSlice } from '@reduxjs/toolkit';
import { Membership, } from '../../interfaces/interfaces';

interface Memberships {
    isLoadingMemberships: boolean,
    memberships: Membership[],
}

const membershipState: Memberships = {
    isLoadingMemberships: false,
    memberships: []
}

export const membershipSlice = createSlice({
    name: 'membership',
    initialState: membershipState,

    reducers: {
        onLoadMemberships: (state) => {
            state.isLoadingMemberships = true
        },
        onSetMemberships: (state, {payload}) => {
            state.isLoadingMemberships = false
            state.memberships = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onLoadMemberships,
    onSetMemberships
 } = membershipSlice.actions;