export interface Error {
    ok: boolean;
    msg: string;
  }

export interface User{
    uid: string
    name: string,
    lastName: string,
    memberNumber: string,
    token: string
}

export interface UserLogin{
    email: string,
    password: string
}
export interface UserRegister{
    email: string,
    password: string,
    name: string,
    lastName: string
}

export interface AuthState{
    isLogged: boolean
    user?: User
}

// general promotions
export interface Promotion {
    idPromo:              string;
    prioridad:            number;
    producto:             string;
    tipo:                 string;
    titulo:               string;
    tituloEn:             string;
    texto:                string;
    textoEn:              string;
    textoBoton:           string;
    textoBotonEn:         string;
    urlTerminos:          string;
    urlTerminosEn:        string;
    terminos:             string;
    terminosEn:           string;
    hoteles?:              Hotel[];
    imagenSlider:         string;
    imagenSliderEn:       string;
    imagenBannerDesk:     string;
    imagenBannerDeskEn:   string;
    imagenBannerMobile:   string;
    imagenBannerMobileEn: string;
    url:                  string;
    urlEn:                string;
    promocode:            string;
    id:                   string;
    fechaInicio?:         Date;
    fechaFin?:            Date;
}

export interface Hotel {
    codigo: string;
    marca:  string;
    nombre: string;
}

// membership promotions
export interface Membership {
    benefits:         string[];
    position:         number;
    nameMembership:   string;
    nameMembershipEn: string;
    titleBenefits:    string;
    titleBenefitsEn:  string;
    benefitOneEn:     string;
    benefitTwoEn:     string;
    benefitThreeEn:   string;
    benefitFourEn:    string;
    benefitFiveEn:    string;
    buttonText:       string;
    buttonTextEn:     string;
    desktopImage:     string;
    desktopImageEn:   string;
    mobileImage:      string;
    mobileImageEn:    string;
    emailDirection:   string;
    url:              string;
    id:               string;
}

// partnerProgram
export interface PartnerProgram {
    program:           string;
    programImage:      string;
    member:            Member;
    informationPoints: InformationPoints;
    Redemtions?:       Redemtion[];
    accreditations?:   Accreditation[];
    certificates?:     Certificate[];
    lastReservation?:  LastReservation[];
}

export interface Accreditation {
    concept:     string;
    processDate: string;
    points:      string;
}
export interface Redemtion {
    concept:     string;
    processDate: string;
    points:      string;
}

export interface Certificate {
    description: string;
    number:      string;
    expiration:  string;
    memberType:  string;
}

export interface InformationPoints {
    pointsExpiryNextMonth:  number;
    pointsExpiryNextMonth2: number;
    pointsExpiryNextMonth3: number;
}

export interface LastReservation {
    hotelName:       string;
    reservationCode: string;
    reservationDate: Date;
    checkIn:         Date;
    checkOut:        Date;
    currency:        string;
    usedPoints:      string;
    cashMount:       string;
    programaReserva: string;
}

export interface Member {
    ownerNumber:      string;
    availablePoints:  string;
    level:           string;
    pointsNextLevel?: string;
    nextLevel?:       string;
    pointsOverdue:    string;
    antiguedad:       string;
}

