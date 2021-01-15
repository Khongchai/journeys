import { navigate } from "@reach/router";

export default function manageSubSections(sectionName: string, operation: string)
{
    
    let sidebarSection: HTMLElement = document.getElementById(`sidebar${sectionName}`);
    let paragraphSection: HTMLElement = document.getElementById(`${sectionName}paragraph`);
    let subSections: HTMLCollectionOf<Element>  = paragraphSection.getElementsByTagName("strong");
    let subSecLength = subSections.length;

    if (operation === "APPEND" && !haveChildrenAlready(sidebarSection))
    {
        for (let i = 0; i < subSecLength; i++)
        {
            let newSection: HTMLAnchorElement = document.createElement("a");

            newSection.classList.add("subsection-anchor");

            //newSection.href = `#${subSections[i].innerHTML}`;
            subSections[i].id = subSections[i].innerHTML;

            newSection.innerHTML = (`${subSections[i].innerHTML}`);
            newSection.style.cursor = "pointer";
            sidebarSection.parentElement.appendChild(newSection);
            //sidebarSection.appendChild(newSection);

            newSection.onclick = () => {
                navigate(`#${subSections[i].innerHTML}`);
            }

        }
    }
    else if (operation === "REMOVE" && haveChildrenAlready(sidebarSection))
    {
        for (let i = 0; i < subSecLength; i++)
        {
            sidebarSection.parentElement.removeChild(sidebarSection.parentElement.lastElementChild);
            //sidebarSection.removeChild(sidebarSection.lastElementChild);
        }
    }

}

function haveChildrenAlready(sidebarSection: HTMLElement): boolean
{

    return sidebarSection.parentElement.getElementsByTagName("a").length >= 1;
}

function insertAfter(referenceNode: HTMLElement, newNode: HTMLElement) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
