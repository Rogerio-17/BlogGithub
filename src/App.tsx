import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
         <GlobalStyles/>
           <Router/>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}
