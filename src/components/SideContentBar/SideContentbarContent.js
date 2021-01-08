import React, {useState, useEffect, useRef} from "react";
import {manageMainSectionsHighlight} from "./utils/viewPortVisibilityMonitor";
import manageLineIndicator from "./utils/manageLineIndicator";

export const SideContentBarContent = () =>
{
    const [allHeadingTexts, setAllHeadingTexts] = useState([]);
    const allHeadingsHTMLElem = useRef(null);

    //this variable prevents the scroll listener from running in pages without this sidebar
    const pageWithSidebar = useRef(true);

    useEffect(() => 
    {
        allHeadingsHTMLElem.current = document.getElementsByTagName("h1");
        setAllHeadingTexts(getTextFromHTMLAndSetID(allHeadingsHTMLElem.current));
        window.addEventListener("scroll", function() 
        {
            //this condition prevents the function from running in pages that do not have the side bar
            if (pageWithSidebar.current)
            {
                manageMainSectionsHighlight(allHeadingsHTMLElem.current);
            }
            manageLineIndicator();
        });

      },[]);

    return(
        <>
            {allHeadingTexts.map(heading => (
                <a href={`#${heading}`} onClick={(e) => 
                    {
                        //wait time should be a bit more than the transition time for runningline element
                        setTimeout(()=>{
                            manageLineIndicator();
                        }, 170);
                        return true;
                    }   
                } id={`sidebar${heading}`} className="sidebar-sections" key={heading}>{heading}</a>
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


