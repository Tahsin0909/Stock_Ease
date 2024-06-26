import { extendTheme } from "@chakra-ui/react"
import { MultiSelectTheme } from 'chakra-multiselect'


// cuctom theme for dark and light mode 
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  components: {
    MultiSelect: MultiSelectTheme
  }
})



export default theme
