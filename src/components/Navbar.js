import 
{
    NavbarWrapper, NavItem, LinkText,
    NavbarNav, NavLink, HomeIcon, BiographyIcon, AboutIcon,
    Logo, CreditIcon, AnalysisIcon, ResearchIcon

} from "../elements";
import React from "react";


export const Navbar = ({topic1, topic2, topic3, topic4, topic5, bottomTopic}) =>
{

    return(
        <NavbarWrapper>
            <NavbarNav>
                <NavItem className="nav-item">
                    <NavLink href="#">
                        <LinkText className="link-text" >
                            Journeys
                        </LinkText>
                        <Logo/>
                    </NavLink>
                </NavItem>

                <NavItem className="nav-item">
                    <NavLink href="#">
                        <AboutIcon/>
                        <LinkText className="link-text">
                            {topic2}
                        </LinkText>
                    </NavLink>
                </NavItem>

                <NavItem className="nav-item">
                    <NavLink href="#">
                        <BiographyIcon/>
                        <LinkText className="link-text">
                            {topic3}
                        </LinkText>
                    </NavLink>
                </NavItem>

                <NavItem className="nav-item">
                    <NavLink href="#">
                        <AnalysisIcon/>
                        <LinkText className="link-text">
                            {topic4}                            
                        </LinkText>
                    </NavLink>
                </NavItem>

                <NavItem className="nav-item">
                    <NavLink href="#">
                        <CreditIcon/>
                        <LinkText className="link-text">
                            {topic5}
                        </LinkText>
                    </NavLink>
                </NavItem>
                    
                <NavItem className="nav-item">
                    <NavLink href="#">
                        <ResearchIcon/>
                        <LinkText className="link-text">
                            {bottomTopic}    
                        </LinkText>
                    </NavLink>
                </NavItem>
                
                
            </NavbarNav>
        </NavbarWrapper>
    );
}

//TODO add icons to each link before the texts
