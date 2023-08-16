import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const baseStyle = defineStyle({
  color:  "primary.10", 
  fontSize: "sm", 
  fontWeight: "light"
})


// Defining a custom variant
const underlineVariant = defineStyle({
    
  _hover: {
    fontWeight: "medium",
    textDecoration: "none",
  },
    _active: {
      fontWeight: "medium",
      textDecoration: "underline",
      _hover: {
        fontWeight: "medium",
        textDecoration: "none",
      },
    },
})


export const linkTheme = defineStyleConfig({
  baseStyle,
  variants: {
    underline: underlineVariant,
  }
})