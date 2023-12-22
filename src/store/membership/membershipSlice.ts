import { createSlice } from '@reduxjs/toolkit';
import { ResponseMemberships } from '../../interfaces/interfaces';

interface membership {
    isLoadingMemberships: boolean,
    memberships: ResponseMemberships[],
}

const membershipState: membership = {
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