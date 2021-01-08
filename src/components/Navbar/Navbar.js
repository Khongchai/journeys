import 
{
    NavbarWrapper, NavItem, LinkText,
    NavbarNav, NavLink, HomeIcon, BiographyIcon, AboutIcon,
    Logo, CreditIcon, AnalysisIcon, ResearchIcon

} from "../../elements";
import { HomeElement } from "../../elements";
import React, {useEffect} from "react";
import handleHomeButtonDrag, {checkIfOffScreen} from "./utils/handleHomeButtonDrag";


export const Navbar = () =>
{
    const projectName = "Journeys";
    const bioText = "Biography";
    const aboutText = "About";
    const approachText = "Approach";
    const creditText = "Credit";
    const analysisText = "Analysis";
    
    useEffect(() => 
    {
        handleHomeButtonDrag();
        window.addEventListener("resize", () => checkIfOffScreen());
    }, []);
    
    return(
        <>
            <HomeElement id="home-button" to="/">
                <HomeIcon/>
            </HomeElement>

            <NavbarWrapper id="navbar-wrapper"> 
                <NavbarNav>
                    
                    <NavItem className="nav-item">
                        <NavLink to="/">
                            <LinkText className="link-text" >
                                {projectName}
                            </LinkText>
                            <Logo/>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item">
                        <NavLink to="/biography">
                            <BiographyIcon/>
                            <LinkText className="link-text">
                                {bioText}
                            </LinkText>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item">
                        <NavLink to="/about">
                            <AboutIcon/>
                            <LinkText className="link-text">
                                {aboutText}
                            </LinkText>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item">
                        <NavLink to="/researh">
                            <ResearchIcon/>
                            <LinkText className="link-text">
                                {approachText}                            
                            </LinkText>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item">
                        <NavLink to="/analysis">
                            <AnalysisIcon/>
                            <LinkText className="link-text">
                                {analysisText}    
                            </LinkText>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item">
                        <NavLink to="credit">
                            <CreditIcon/>
                            <LinkText className="link-text">
                                {creditText}
                            </LinkText>
                        </NavLink>
                    </NavItem>
                    
                    
                </NavbarNav>
            </NavbarWrapper>
        </>
    );
}

//TODO add icons to each link before the texts
