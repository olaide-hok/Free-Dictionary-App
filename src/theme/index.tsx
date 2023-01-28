import {extendTheme, theme as base} from '@chakra-ui/react'

const theme = extendTheme({
  colors: {},
  fonts: {
    heading: `Serif, ${base.fonts?.heading}`,
    body: `Mono, ${base.fonts?.body}`,
  },
})

export default theme
