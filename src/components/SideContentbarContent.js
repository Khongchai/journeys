import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

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
                <a href={`#${heading}`} id={`sidebar${heading}`} className="sidebar-sections" key={heading}>{heading}</a>
            ))}
        </ContentBarStyled>
    )
};

const ContentBarStyled = styled.div`
    margin-top: 48px;

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
function detectOffScreen(elem)
{
    //when section reaches the height of 20 percent of the viewport, set the side bar to active.
    let thresholdFromTop = document.documentElement.clientHeight * 0.9;
    let elemLength = elem.length;
    for (let i = 0; i < elemLength; i++)
    {
        let sectionID = `sidebar${elem[i].innerHTML}`;
        let sidebarSection = document.getElementById(sectionID);
        let paragraphHeight = parseInt(window.getComputedStyle(document.getElementById(`${elem[i].innerHTML}paragraph`)).getPropertyValue("height"));
        if ((0 - paragraphHeight) < elem[i].getBoundingClientRect().y && elem[i].getBoundingClientRect().y < thresholdFromTop)
        { 
            moveLineIndicatorHere(sidebarSection);
            sidebarSection.classList.add("active");
        }
        else
        {
            sidebarSection.classList.remove("active");
        }
    }
}

//refactor so that it can be called from anywhere (might call when someone click one of the links instead of scrolling)
function moveLineIndicatorHere(sidebarSection)
{
    let lineIndicator = document.getElementById("line-indicator");
    let sidebarSectionPosition = sidebarSection.getBoundingClientRect();
    let sidebarSectionHeight = parseInt(window.getComputedStyle(sidebarSection).getPropertyValue("height"));
    lineIndicator.style.top = `${sidebarSectionPosition.y}px`;
    lineIndicator.style.height = `${sidebarSectionHeight}px`;
}