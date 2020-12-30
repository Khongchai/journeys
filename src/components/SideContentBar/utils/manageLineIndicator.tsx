export default function manageLineIndicator()
{
    let allActiveElements: HTMLCollectionOf<Element> = document.getElementsByClassName("active");
    if (allActiveElements.length > 0)
    {
        let firstActiveElemProperties: CSSStyleDeclaration = window.getComputedStyle(allActiveElements[0]);
        let sidebarSectionMargin: number = parseInt(firstActiveElemProperties.getPropertyValue("margin-top"));
    
        let lineIndicator: HTMLElement = document.getElementById("line-indicator");
        let lineIndicatorHeight: number = getHeightOfAllActiveElements(allActiveElements);
        let sideBarSectionsMargin: number = getMarginOfAllActiveElements(sidebarSectionMargin, allActiveElements.length);
        let lineIndicatorPosition: number = allActiveElements[0].getBoundingClientRect().y ;
    
        lineIndicator.style.height = `${lineIndicatorHeight + sideBarSectionsMargin}px`;
        lineIndicator.style.top = `${lineIndicatorPosition}px`;
    }
}

function getHeightOfAllActiveElements(allActiveElements: HTMLCollectionOf<Element>): number
{
    //if the section has subsections, take its height
    let allHeight: number = 0;
    for (let elem of allActiveElements)
    {
        allHeight += parseInt(window.getComputedStyle(elem).getPropertyValue("height"));
    }
    return allHeight;
}

function getMarginOfAllActiveElements(marginOfOneElement: number, lengthOfAllActiveElem: number): number
{
    // - 1 because we do not want the margin of the first element.
    let allMargin: number = (lengthOfAllActiveElem - 1) * marginOfOneElement;
    return allMargin;
}