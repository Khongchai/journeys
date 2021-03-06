import {
  NavbarWrapper,
  NavItem,
  LinkText,
  NavbarNav,
  NavLink,
  HomeIcon,
  BiographyIcon,
  AboutIcon,
  Logo,
  CreditIcon,
  AnalysisIcon,
  ResearchIcon,
  PerformanceIcon,
} from "../../elements"
import { HomeElement } from "../../elements"
import React, { useEffect } from "react"
import { checkIfOffScreen } from "./utils/handleHomeButtonDrag"

export const Navbar = () => {
  const projectName = "Journeys"
  const bioText = "Biography"
  const aboutText = "About"
  //Journey page is called result, to prevent path conflict.
  const resultText = "Journeys"
  const creditText = "Credit"
  const analysisText = "Analysis"
  const performanceText = "Performance"

  useEffect(() => {
    window.addEventListener("resize", () => checkIfOffScreen())
  }, [])

  return (
    <>
      <HomeElement id="home-button" to="/">
        <HomeIcon />
      </HomeElement>

      <NavbarWrapper id="navbar-wrapper">
        <NavbarNav>
          <NavItem className="nav-item">
            <NavLink to="/">
              <LinkText className="link-text">{projectName}</LinkText>
              <Logo />
            </NavLink>
          </NavItem>

          <NavItem className="nav-item">
            <NavLink to="/about">
              <AboutIcon />
              <LinkText className="link-text">{aboutText}</LinkText>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item">
            <NavLink to="/biography">
              <BiographyIcon />
              <LinkText className="link-text">{bioText}</LinkText>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item">
            <NavLink to="/analysis">
              <AnalysisIcon />
              <LinkText className="link-text">{analysisText}</LinkText>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item">
            <NavLink to="/performance">
              <PerformanceIcon />
              <LinkText className="link-text">{performanceText}</LinkText>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item">
            <NavLink to="/result">
              <ResearchIcon />
              <LinkText className="link-text">{resultText}</LinkText>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item">
            <NavLink to="/credit">
              <CreditIcon />
              <LinkText className="link-text">{creditText}</LinkText>
            </NavLink>
          </NavItem>
        </NavbarNav>
      </NavbarWrapper>
    </>
  )
}

//TODO add icons to each link before the texts
