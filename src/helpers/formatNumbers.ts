
type props = {
    number: string
}
export const formatNumbers = ( {number}: props ): string => {
    return (parseInt(number).toLocaleString('es-MX'))
}