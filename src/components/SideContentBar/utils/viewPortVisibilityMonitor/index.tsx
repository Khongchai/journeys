import addSubSections from "../addSubSections";
import getBottomThreshold from "./getBottomThreshold";
import getTopThreshold from "./getTopThreshold";
import elementIsVisibleInViewport from "./elementIsVisibleInViewport";

export function manageMainSectionsHighlight(elems: HTMLCollectionOf<Element>)
{
    
    let bottomThreshold: number = getBottomThreshold();
    let topThreshold: number = getTopThreshold();
    let elemLength: number = elems.length;

    for (let i = 0; i < elemLength; i++)
    {
        let sectionName: string = elems[i].firstChild.nodeValue;
        let sectionID: string = `sidebar${sectionName}`;
        let sidebarSection: HTMLElement = document.getElementById(sectionID);
        let targetParagraph: HTMLElement = document.getElementById(`${sectionName}paragraph`);
        let paragraphHeight: number = parseInt(window.getComputedStyle(targetParagraph).getPropertyValue("height"));

        //if there exist a subsection of id ${sectionName}
        if (targetParagraph)
        {        
            if (elementIsVisibleInViewport(elems[i].getBoundingClientRect().y, bottomThreshold, topThreshold, elems[i].getBoundingClientRect().y + paragraphHeight))
            { 
                sidebarSection.classList.add("active");
                addSubSections(sectionName, "APPEND");
            }
            else
            {
                addSubSections(sectionName, "REMOVE");
                sidebarSection.classList.remove("active");
            }
        }
    }
    manageSubSectionHighlight();
}

export function manageSubSectionHighlight()
{
    
    let activeSubSections = document.getElementsByClassName("subsection-anchor") as HTMLCollectionOf<HTMLElement>;
    let activeSubSectionsLength: number = activeSubSections.length;
    for (let i = 0; i < activeSubSectionsLength; i++)
    {
        let bottomThreshold: number = getBottomThreshold();
        let topThreshold: number = getTopThreshold();
    
        let sectionName: string = activeSubSections[i].innerHTML;
        let targetParagraph: HTMLElement = document.getElementById(`${sectionName}paragraph`);
    
        //if there exist a sub section of id ${sectionName}
        if (targetParagraph)
        {
            let paragraphHeight: number = parseInt(window.getComputedStyle(targetParagraph).getPropertyValue("height"));
    
            if (elementIsVisibleInViewport(targetParagraph.getBoundingClientRect().y, bottomThreshold, topThreshold, paragraphHeight + targetParagraph.getBoundingClientRect().y))
            {
                activeSubSections[i].classList.add("active-sub");

            }
            else
            {
                activeSubSections[i].classList.remove("active-sub");
            }
        }
    }
}



