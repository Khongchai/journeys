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
        //console.log(parseInt(window.getComputedStyle(targetParagraph).getPropertyValue("height")));
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
                sidebarSection.classList.remove("active");;
            }
        }
    }

}


