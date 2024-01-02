import { WalletApi } from "../api/WalletApi"
import { onLoadPartnerPrograms, onSetPartnerPrograms } from "../store"
import { useAppDispatch, useAppSelector } from "./"

export const usePartnerProgramStore = () => {
    const {isLoadingPartnerPrograms, programs} = useAppSelector(state => state.partnerPrograms)
    const { user } = useAppSelector( state => state.auth )
    const dispatch = useAppDispatch()

    const startLoadingPartnerPrograms = async() => {
        dispatch( onLoadPartnerPrograms() )

        const {data} = await WalletApi.get(`/partnerPrograms?memberNumber=${user?.memberNumber}`)

        dispatch(onSetPartnerPrograms(data.programs))

    }

    return{
        // * propiedades
        isLoadingPartnerPrograms,
        programs,

        // * metodos
        startLoadingPartnerPrograms
    }
}