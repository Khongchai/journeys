import React, {useState, useEffect, useRef} from "react";
import checkIfInViewport from "./utils/checkIfInViewport";

export const SideContentBarContent = () =>
{
    const [allHeadingTexts, setAllHeadingTexts] = useState([]);
    const allHeadingsHTMLElem = useRef(null);

    useEffect(() => 
    {
        allHeadingsHTMLElem.current = document.getElementsByTagName("h1");
        setAllHeadingTexts(getTextFromHTMLAndSetID(allHeadingsHTMLElem.current));
        window.addEventListener("scroll", ()=>checkIfInViewport(allHeadingsHTMLElem.current));
        return () => window.removeEventListener("scroll", checkIfInViewport);
      },[]);

      //not a here, but in the child so that you can link to both the main and sub sections
    return(
        <>
            {allHeadingTexts.map(heading => (
                <a href={`#${heading}`} onClick={() => {checkIfInViewport(allHeadingsHTMLElem.current)}} id={`sidebar${heading}`} className="sidebar-sections" key={heading}>{heading}</a>
            ))}
        </>
    )
};

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


