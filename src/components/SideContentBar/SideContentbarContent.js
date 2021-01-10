import React, {useState, useEffect, useRef} from "react";
import {manageMainSectionsHighlight} from "./utils/viewPortVisibilityMonitor";
import manageLineIndicator from "./utils/manageLineIndicator";

export const SideContentBarContent = () =>
{
    const [allHeadingTexts, setAllHeadingTexts] = useState([]);
    const allHeadingsHTMLElem = useRef(null);

    useEffect(() => 
    {
        allHeadingsHTMLElem.current = document.getElementsByTagName("h1");
        setAllHeadingTexts(getTextFromHTMLAndSetID(allHeadingsHTMLElem.current));
        const manageEventListener = function()
        {
            //only run when thre is a side bar
            if (document.getElementById("line-indicator"))
            {
                manageMainSectionsHighlight(allHeadingsHTMLElem.current);
                manageLineIndicator();
            } 
        }
        window.addEventListener("scroll", manageEventListener);

        return () => {
            window.removeEventListener("scroll", manageEventListener);
        }
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


