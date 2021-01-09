import getBottomThreshold from "./getBottomThreshold";
import getTopThreshold from "./getTopThreshold";
import elementIsVisibleInViewport from "./elementIsVisibleInViewport";

export default function manageSubSectionsHighlight()
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
