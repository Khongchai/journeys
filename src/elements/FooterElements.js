import styled from "styled-components";

export const FooterWrapper = styled.footer`
    grid-column: ${props => props.theme.width.mainContentWidth};
    display: flex;
    min-height: 11.25rem;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;

`;

export const FooterIconsWrapper = styled.div`
    display: flex;
    flex: 0 0 100%;
    justify-content: center;
    align-items: center;
    a
    {
        transition: opacity .3s;
        opacity: 0.3;
        margin: 0 auto;
        height: 22px;
        background-clip: border-box;
        :hover
        {
            opacity: 1;
        }
        
    }


`;