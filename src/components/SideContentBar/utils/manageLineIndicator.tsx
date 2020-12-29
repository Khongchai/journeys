export default function manageLineIndicator()
{
    let allActiveElements: HTMLCollectionOf<Element> = document.getElementsByClassName("active");
    if (allActiveElements.length > 0)
    {
        let firstActiveElemProperties: CSSStyleDeclaration = window.getComputedStyle(allActiveElements[0]);
        let sidebarSectionHeight: number = parseInt(firstActiveElemProperties.getPropertyValue("height"));
        let sidebarSectionMargin: number = parseInt(firstActiveElemProperties.getPropertyValue("margin-top"));
    
        let lineIndicator: HTMLElement = document.getElementById("line-indicator");
        let lineIndicatorHeight: number = getHeightOfAllActiveElements(sidebarSectionHeight, allActiveElements.length);
        let sideBarSectionsMargin: number = getMarginOfAllActiveElements(sidebarSectionMargin, allActiveElements.length);
        let lineIndicatorPosition: number = allActiveElements[0].getBoundingClientRect().y ;
    
        lineIndicator.style.height = `${lineIndicatorHeight + sideBarSectionsMargin}px`;
        lineIndicator.style.top = `${lineIndicatorPosition}px`;
    }
}

function getHeightOfAllActiveElements(heightOfOneElement: number, lengthOfAllActiveElem: number): number
{
    let allHeight: number = lengthOfAllActiveElem * heightOfOneElement;
    return allHeight;
}

function getMarginOfAllActiveElements(marginOfOneElement: number, lengthOfAllActiveElem: number): number
{
    // - 1 because we do not want the margin of the first element.
    let allMargin: number = (lengthOfAllActiveElem - 1) * marginOfOneElement;
    return allMargin;
}