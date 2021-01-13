import React from "react";
import {FooterWrapper, FooterIconsWrapper} from "../elements";

export const Footer = () =>
{

    return(
        <FooterWrapper>
            <FooterIconsWrapper>
                <a href="https://open.spotify.com/artist/25znyDCY8EmPkMAT5g4oPw" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="Spotify Logo" />
                </a>
                <a href="https://github.com/Khongchai" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github Logo" />
                </a>
                <a href="https://www.facebook.com/NoSpoonOnlyFork/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"  alt="Facebook Logo" />
                </a>
                <a href="https://www.youtube.com/user/Alphaplz" target="_blank" rel="noopener noreferrer">
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/300px-YouTube_social_red_square_%282017%29.svg.png" alt="YouTube Logo"/>
                </a>
            </FooterIconsWrapper>
        </FooterWrapper>
    );
}