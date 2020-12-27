import React from "react";
import {FooterWrapper, FooterIconsWrapper} from "../elements";
import {useStaticQuery, graphql} from "gatsby";

export const Footer = () =>
{
    const data = useStaticQuery(graphql`
        query
        {
            spotify: file(relativePath: {eq: "spotify.svg"})
            {
                publicURL
            }
            github: file(relativePath: {eq: "github.svg"})
            {
                publicURL
            }
            facebook: file(relativePath: {eq: "facebook.svg"})
            {
                publicURL
            }
            youtube: file(relativePath: {eq: "youtube.svg"})
            {
                publicURL
            }
        }
    `)
    return(
        <FooterWrapper>
            <FooterIconsWrapper>
                <a href="https://open.spotify.com/artist/25znyDCY8EmPkMAT5g4oPw" target="_blank" rel="noopener noreferrer">
                    <img src={data.spotify.publicURL} alt="Spotify Logo" />
                </a>
                <a href="https://github.com/Khongchai" target="_blank" rel="noopener noreferrer">
                    <img src={data.github.publicURL} alt="Github Logo" />
                </a>
                <a href="https://www.facebook.com/NoSpoonOnlyFork/" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook Logo" />
                </a>
                <a href="https://www.youtube.com/user/Alphaplz" target="_blank" rel="noopener noreferrer">
                    <img src={data.youtube.publicURL} alt="YouTube Logo" />
                </a>
            </FooterIconsWrapper>
        </FooterWrapper>
    );
}