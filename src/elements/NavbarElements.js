import styled from "styled-components";
import {Link} from "gatsby";
import React from "react";
import zIndexPriority from "../themes/z-indexPriority";

export const NavbarWrapper = styled.div`
    //Width matches window's margin.
    width: 5rem;
    //Give full size and react accordingly on resize.
    height: 100vh;
    position: fixed;
    background-color: ${props => props.theme.colors.mainPurple};
    z-index: ${zIndexPriority.Navbar};

    :hover
    {
        width: 16rem;
        .link-text
        {
            opacity: 1;
            pointer-events: auto;
        }
        #logo
        {
            transform: rotate(-180deg);
            opacity: 1;
        }

    }

    transition: position 200ms ease, width 200ms ease;
    cursor: context-menu;

    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        bottom: 0 !important;
        //swap width and height
        width: 100vw !important;
        height: 5rem !important;
        .nav-item:first-child
        {
            display: none !important;
        }
    }
`;

export const NavbarNav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        flex-direction: row !important;
    }
`;

export const NavItem = styled.li`
    width: 100%;
    :last-child
    {
        margin-top: auto;
    }
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        margin-top: 0 !important;
    }
    min-width: 0;
`;

export const NavLink = styled(props => <Link{...props}/>)`
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 5rem;
    color: ${props => props.theme.colors.mainYellow};
    svg
    {
        //Width of 2rem + left/right margin of 3rem = 5rem; the length of the navbar.
        max-width: 2rem;
        min-width: 2rem;
        margin: 0 1.5rem;
    }
    
    filter: grayscale(100%) opacity(0.7);
    transition: ${props => props.theme.animations.transitionSpeed};
    :hover
    {
        filter: grayscale(0%) opacity(1);
        background-color: ${props => props.theme.colors.mainBlack};
    }

    #logo
    {
        transform: rotate(0deg);
        opacity: 0;
        transition: transform ${props => props.theme.animations.transitionSpeed}, opacity 100ms;

    }

    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        justify-content: center !important;
    }
`;

export const LinkText = styled.span`
    :not(:first-child)
    {
        position: absolute;
    }
    :first-child
    {
        text-transform: uppercase;
        display: "inline";
        position: "absolute"; 
        left: "-999px"; 
        font-weight: bold;
        letter-spacing: 0.3ch;
        transition: ${props => props.theme.animations.transitionSpeed};
    }
    opacity: 0;
    margin-left: 1rem;
    transition: 200ms;
    left: 5rem;
    pointer-events: none;

    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        display: none !important;
    }

`;
