import { WalletApi } from "../api/WalletApi"
import { useAppDispatch, useAppSelector } from "./"
import { onLoadPromotions, onSetPromotions } from "../store"

export const usePromotionStore = () => {

    const {promotions, isLoadingPromotions} = useAppSelector(state => state.promotions)
    const dispatch = useAppDispatch()

    const startLoadingPromotions = async() => {
        dispatch(onLoadPromotions())

        const { data } = await WalletApi.get('/promotions')
        dispatch( onSetPromotions(data.promotions) )
    }

    return{
        // propiedades
        promotions,
        isLoadingPromotions,

        // *metodos
        startLoadingPromotions,
    }
}

