import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: ${props => props.theme.width.mainContentWidth};
  margin-left: 10px;
  padding: 5.5rem;
  padding-right: 1.6rem;
  margin-left: 10px;

  z-index: 10;

  /*
        MDX style
    */

  #article-container {
    * + * {
      margin-top: 1.5em;
    }
  }

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.175rem;
    line-height: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 0.9rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.875rem;
    font-weight: 400;
    text-indent: 2.1rem;
  }

  a {
    text-decoration: none;
  }

  strong /*sub section*/ {
    display: block;

    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    background-color: ${props => props.theme.colors.secondaryPink};
    border-radius: 6px;
    padding: 1rem;
    line-height: 2.125rem;
    max-width: 36rem;
    margin: 3rem auto;
    :hover {
      box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
        rgba(71, 63, 79, 0.16) 0px 8px 24px;
    }
    transition: box-shadow 0.3s;
  }
  em {
    font-size: 0.9rem;
    display: block;
  }
  ul,
  ol {
    color: ${props => props.theme.colors.dark2};
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  canvas {
    margin-top: 0 !important;
  }

  code {
    font-family: ${props => props.theme.fonts.code};
    font-size: 1rem;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.light1};
    background-color: ${props => props.theme.colors.dark3};
    padding: 0 0.03rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.dark1};
    opacity: 0.1;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${props => props.theme.colors.dark3};
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  @media ${props => props.theme.breakpoints.mobileAndTablet} {
    grid-column: 2 / span 6;
    padding: 1rem;
  }

  img {
    transition: box-shadow 0.3s;
    margin-top: 1rem;
    width: 100%;
    cursor: pointer;
  }
  img:hover {
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
      rgba(71, 63, 79, 0.16) 0px 8px 24px;
  }
  .image-caption {
    text-align: right;
  }
  .adjacent {
    width: 40% !important;
    margin: 1.2rem;
  }
  .adjacent-small {
    width: 20% !important;
    margin: 1.2rem;
  }

  .adjacent-images-container {
    display: flex;
    align-items: center;
  }

  .large-image-contain {
    width: 70% !important;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .center {
    text-align: center !important;
  }

  .half-width {
    width: 50% !important;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background:  #702cb5
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #702cb5;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #702cb5;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #702cb5;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-ms-fill-upper {
    background: #9d5cbd;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #9d5cbd;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #702cb5;
  }
`
