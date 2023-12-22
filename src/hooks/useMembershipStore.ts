import { WalletApi } from "../api/WalletApi";
import { onLoadMemberships, onSetMemberships } from "../store";
import { useAppDispatch, useAppSelector } from "./";


export const useMembershipStore = () => {

    const {isLoadingMemberships, memberships} = useAppSelector(state => state.memberships);
    const dispatch = useAppDispatch()

    // thunks

    const startLoadingMemberships = async() => {

        dispatch(onLoadMemberships())
        const { data } = await WalletApi.get('/memberships')

        dispatch( onSetMemberships(data.memberships) )
    }


    return{
        //* propiedades
        isLoadingMemberships,
        memberships,

        //* metodos
        startLoadingMemberships,
    }
}