export default function manageLineIndicator()
{
    let allActiveElements = document.getElementsByClassName("active");
    if (allActiveElements.length > 0)
    {
        let firstActiveElemProperties = window.getComputedStyle(allActiveElements[0]);
        let sidebarSectionHeight = parseInt(firstActiveElemProperties.getPropertyValue("height"));
        let sidebarSectionMargin = parseInt(firstActiveElemProperties.getPropertyValue("margin-top"));
    
        let lineIndicator = document.getElementById("line-indicator");
        let lineIndicatorHeight = getHeightOfAllActiveElements(sidebarSectionHeight, allActiveElements.length);
        let sideBarSectionsMargin = getMarginOfAllActiveElements(sidebarSectionMargin, allActiveElements.length);
        let lineIndicatorPosition = allActiveElements[0].getBoundingClientRect().y ;
    
        lineIndicator.style.height = `${lineIndicatorHeight + sideBarSectionsMargin}px`;
        lineIndicator.style.top = `${lineIndicatorPosition}px`;
    }
}

function getHeightOfAllActiveElements(heightOfOneElement, lengthOfAllActiveElem)
{
    let allHeight = lengthOfAllActiveElem * heightOfOneElement;
    return allHeight;
}

function getMarginOfAllActiveElements(marginOfOneElement, lengthOfAllActiveElem)
{
    // - 1 because we do not want the margin of the first element.
    let allMargin = (lengthOfAllActiveElem - 1) * marginOfOneElement;
    return allMargin;
}