import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`

    :root
    {
        font-size: 16px;
    }
    *
    {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #gatsby-focus-wrapper
    {
        width: 100%;
        height: 100vh;
    }
    #__gatsby
    {
        width: 100%;
        height: 100vh;
    }

    body, html
    {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.mainWhite};
    }

    body::-webkit-scrollbar
    {
        width: 1rem;
    }
    
    body::-webkit-scrollbar-track
    {
        background: ${props => props.theme.colors.mainBlack};
    }

    body::-webkit-scrollbar-thumb
    {
        background: ${props => props.theme.colors.mainYellow};
    }

    ::-moz-selection 
    { /* Code for Firefox */
        color: ${props => props.theme.colors.mainWhite};
        background: ${props => props.theme.colors.mainMagenta};
    }

    ::selection 
    {
        color: ${props => props.theme.colors.mainWhite};
        background: ${props => props.theme.colors.mainMagenta};
    }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
