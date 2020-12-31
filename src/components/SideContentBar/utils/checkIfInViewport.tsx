import manageLineIndicator from "./manageLineIndicator";
import manageSubSections from "./manageSubsections";


//running time = O(n)
//maybe refactor this so that it returns a boolean so that it can be used by any components
export default function checkIfInViewPort(elems: HTMLCollectionOf<Element>)
{
    //this function is doing too many things; refactor.
    //threshold defines the point where elements remain active, eg. threold = 0.9 means active for 90% of the screen's height.
    let thresholdFromTop: number = document.documentElement.clientHeight * 1.1;
    let elemLength: number = elems.length;
    for (let i = 0; i < elemLength; i++)
    {
        let sectionName: string = elems[i].firstChild.nodeValue;
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
