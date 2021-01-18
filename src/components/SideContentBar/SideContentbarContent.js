import React, {useState, useEffect, useRef} from "react";
import {manageMainSectionsHighlight} from "./utils/viewPortVisibilityMonitor";
import manageLineIndicator from "./utils/manageLineIndicator";
import manageSubSectionsHighlight from "./utils/viewPortVisibilityMonitor/manageSubSectionsHighlight";
import { navigate } from '@reach/router';

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
                manageMainAndSubsections(allHeadingsHTMLElem);
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
            {allHeadingTexts.map((heading, i) => (
                <div id={`sidebar${heading}parent`}
                className={allHeadingsHTMLElem.current[i].classList.contains("main-topic")? "": "indented-topic"}
                 style={{paddingTop: "1.9rem"}} >
                <span style={{cursor: "pointer"}} onClick={() => 
                        {
                            navigate(`#${heading}`);
                            //wait time should be a bit more than the transition time for runningline element
                            setTimeout(()=>{
                                manageLineIndicator();
                            }, 170);
                            return true;
                        }   
                    } 
                    id={`sidebar${heading}`}  className="sidebar-sections" key={heading}>{heading}</span>
                </div>
                
            ))}
        </>
    )
};

function getTextFromHTMLAndSetID(HTMLArray)
{
    const array = [];
    for (let obj of HTMLArray)
    {
        if (obj.className === "main-topic") obj.classList.add("center");
        let text = obj.innerHTML;
        obj.id = text;
        array.push(text);
    }
    return array;
}

function manageMainAndSubsections(allHeadingsHTMLElem)
{
    manageMainSectionsHighlight(allHeadingsHTMLElem.current);
    manageSubSectionsHighlight();
}


