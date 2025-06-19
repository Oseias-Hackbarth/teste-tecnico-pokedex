import { ThemeProvider } from "./Context/ThemeContext"
import { GlobalStyle } from "./Styles/GlobalStyle"
import { AppRoutes } from "./Pages/Routes"



function App() {

  return (
    <>
    <GlobalStyle />
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
      
    </>
  )
}

export default App