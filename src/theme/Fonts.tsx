import { Global } from "@emotion/react"

import GothamRoundedBook from '../assets/fonts/GothamRoundedBook_21018.ttf'
import GothamRoundedMedium from '../assets/fonts/GothamRoundedMedium_21022.ttf'
import GothamRoundedBold from '../assets/fonts/GothamRoundedBold_21016.ttf'

export const Fonts = () => {
  return (
    <Global
        styles={`
          @font-face {
            font-family: 'Gotham';
            src: url('${GothamRoundedBook}') format('truetype');
            font-style: normal;
            font-weight: 300;
          }
          @font-face {
              font-family: 'Gotham';
              src: url('${GothamRoundedMedium}') format('truetype');
              font-style: normal;
              font-weight: 350;
          }
          @font-face {
            font-family: 'Gotham';
            src: url('${GothamRoundedBold}') format('truetype');
            font-style: normal;
            font-weight: 500;
          }
        `}
    />
  )
}
