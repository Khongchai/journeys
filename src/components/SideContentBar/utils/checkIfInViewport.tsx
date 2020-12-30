import manageLineIndicator from "./manageLineIndicator";
import manageSubSections from "./manageSubsections";


//running time = O(n)
export default function checkIfInViewPort(elems: HTMLCollectionOf<Element>)
{
    let thresholdFromTop: number = document.documentElement.clientHeight * 0.9;
    let elemLength: number = elems.length;
    for (let i = 0; i < elemLength; i++)
    {
        let sectionName:  string = elems[i].firstChild.nodeValue;
        let sectionID: string = `sidebar${sectionName}`;
        let sidebarSection: HTMLElement = document.getElementById(sectionID);
        let paragraphHeight: number = parseInt(window.getComputedStyle(document.getElementById(`${sectionName}paragraph`)).getPropertyValue("height"));
        if ((0 - paragraphHeight) < elems[i].getBoundingClientRect().y && elems[i].getBoundingClientRect().y < thresholdFromTop)
        { 
            sidebarSection.classList.add("active");
            manageLineIndicator();
            manageSubSections(sectionName, "APPEND");
        }
        else
        {
            manageSubSections(sectionName, "REMOVE");
            sidebarSection.classList.remove("active");
        }
    }
}
