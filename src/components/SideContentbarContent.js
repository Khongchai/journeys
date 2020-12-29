import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import manageLineIndicator from "./utils/manageLineIndicator";

export const SideContentBarContent = () =>
{
    const [allHeadingTexts, setAllHeadingTexts] = useState([]);
    const allHeadingsHTMLElem = useRef(null);

    useEffect(() => 
    {
        allHeadingsHTMLElem.current = document.getElementsByTagName("h1");
        setAllHeadingTexts(getTextFromHTMLAndSetID(allHeadingsHTMLElem.current));
        window.addEventListener("scroll", ()=>detectOffScreen(allHeadingsHTMLElem.current));
        return () => window.removeEventListener("scroll", detectOffScreen);
      },[]);

    return(
        <ContentBarStyled>
            {allHeadingTexts.map(heading => (
                <a href={`#${heading}`} onClick={() => {detectOffScreen(allHeadingsHTMLElem.current)}} id={`sidebar${heading}`} className="sidebar-sections" key={heading}>{heading}</a>
            ))}
        </ContentBarStyled>
    )
};

const ContentBarStyled = styled.div`

`;

function getTextFromHTMLAndSetID(HTMLArray)
{
    const array = [];
    for (let obj of HTMLArray)
    {
        let text = obj.innerHTML;
        obj.id = text;
        array.push(text);
    }
    return array;
}

//running time = O(n)
function detectOffScreen(elems)
{
    //when section reaches the height of 20 percent of the viewport, set the side bar to active.
    let thresholdFromTop = document.documentElement.clientHeight * 0.9;
    let elemLength = elems.length;
    for (let i = 0; i < elemLength; i++)
    {
        let sectionID = `sidebar${elems[i].innerHTML}`;
        let sidebarSection = document.getElementById(sectionID);
        let paragraphHeight = parseInt(window.getComputedStyle(document.getElementById(`${elems[i].innerHTML}paragraph`)).getPropertyValue("height"));
        if ((0 - paragraphHeight) < elems[i].getBoundingClientRect().y && elems[i].getBoundingClientRect().y < thresholdFromTop)
        { 
            sidebarSection.classList.add("active");
            manageLineIndicator();
        }
        else
        {
            sidebarSection.classList.remove("active");
        }
    }
}

