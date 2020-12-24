import styled from "styled-components";
import React from "react";
import {Link} from "gatsby";

export const HomeElement = styled(props => <Link {...props}/>)`

    @media ${props => props.theme.breakpoints.largeDevices}
    {
        display: none;
    }
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

    transition: .1s;
`;

