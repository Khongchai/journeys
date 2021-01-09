import styled from "styled-components";

export const ContentWrapper = styled.main`

    grid-column: ${props => props.theme.width.mainContentWidth};
    margin-left: 10px;
    padding: 5.5rem;
    margin-left: 10px;

    z-index: 10;

    /*
        MDX style
    */

    h1,
    h2,h3,h4,h5,h6
    {
        margin-top: 2rem;
    }
    h1:first-child
    {
        margin-top: 3rem !important;
    }
    h1
    {
        font-size: 2rem;
        line-height: 2.5rem;
        font-weight: 400;
    }

    h2
    {
        font-size: 1.25rem;
        line-height: 1.875rem;
        font-weight: 400;
    }

    h3
    {
        font-size: 1.175rem;
        line-height: 1.625rem;
        font-weight: 700;
    }

    h4
    {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    h5
    {
        font-size: 0.9rem;
        line-height: 1.375rem;
        font-weight: 700;
    }

    h6
    {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    p
    {
        font-size: 0.9rem;
        line-height: 1.875rem;
        font-weight: 400;
        text-indent: 2.1rem;
        margin-top: 1.245rem;
    }

    a
    {
        
       text-decoration: none; 
    }

    strong /*sub section*/
    {
        display: block;
        margin-top: 2rem;
        font-weight: 700;
    }

    em
    {
        font-style: italic;
    }

    del
    {
        text-decoration: line-through;
    }

    blockquote p
    {
        font-style: italic;
        background-color: ${props=>props.theme.colors.secondaryPink};
        border-radius: 6px;
        padding: 1rem;
        line-height: 2.125rem;
        max-width: 36rem;
        margin:3rem auto;
        :hover
        {
            box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px, rgba(71, 63, 79, 0.16) 0px 8px 24px;
        }
        transition: box-shadow .3s;
    }
    em
    {
        font-size: 0.9rem;
        display: block;
    }
    ul,ol
    {
        color: ${props => props.theme.colors.dark2};
        margin: 1rem 0 1rem 2rem;
    }

    li
    {
        margin: 0.25rem 0;
    }

    code
    {
      font-family: ${props => props.theme.fonts.code};
      font-size: 1rem;
      line-height: 1.875rem;  
      color: ${props => props.theme.colors.light1};
      background-color: ${props => props.theme.colors.dark3};
      padding: 0 0.03rem;
    }

    hr
    {
        border: 0;
        height: 1px;
        background: ${props => props.theme.colors.dark1};
        opacity: 0.1;
        margin-top: 2rem;
    }

    table
    {
       width: 100%;
       border-spacing: 0.25rem;
       border-collapse: collapse;
       font-size: 1rem;
       line-height: 1.5rem;
       font-weight: 400;
    }

    th
    {
        font-weight: 700;
    }

    table,th,td
    {
        border: 1px solid ${props => props.theme.colors.dark3};
    }
    
    th,td
    {
        text-align: left;
        padding: 0.5rem;
    }



    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        grid-column: 2 / span 6;
        padding: 1rem;
    }

`;