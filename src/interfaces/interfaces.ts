

export interface User{
    email: string
    memberNumber: string,
    name: string,
    lastName: string
}

export interface AuthState{
    isLogged: boolean
    user?: User
}

export interface ResponsePromotion{
    idPromo: string,
    imagenSlider: string,
    titulo: string,
    texto: string,
    terminos: string,
    producto: string,
    textoBoton: string,
    url: string,
}

export interface ResponseMemberships{
    desktopImage: string,
    nameMembership: string,
    titleBenefits: string,
    benefits: string[],
    buttonText: string,
    url: string,
}

export interface memberInfo{
    ownerNumber : string,
    availablePoints : string,
    level : string,
    nextLevel : string,
    pointsNextLevel : string
}

export interface ResponsePartnerPrograms{
    program: string,
    programImage: string,
    member: memberInfo
}

