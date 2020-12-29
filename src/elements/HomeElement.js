import styled from "styled-components";
import React from "react";
import {Link} from "gatsby";
import zIndexPriority from "../themes/z-indexPriority";

export const HomeElement = styled(props => <Link {...props}/>)`

    @media ${props => props.theme.breakpoints.largeDevices}
    {
        display: none;
    }
    z-index: ${zIndexPriority.Navbar};
    border-radius: 50%;
    padding: 10px;
    display: block;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-content: center;
    justify-content: center;
    top: 8px;
    left: 8px;
    position: fixed;
    margin: 0.5rem;
    background-color: ${props => props.theme.colors.mainPurple};

    transition: .05s;
`;

