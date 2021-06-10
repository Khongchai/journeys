import React, { useState, useEffect, useRef } from "react"
import { manageMainSectionsHighlight } from "./utils/viewPortVisibilityMonitor"
import manageLineIndicator from "./utils/manageLineIndicator"
import manageSubSectionsHighlight from "./utils/viewPortVisibilityMonitor/manageSubSectionsHighlight"

export const SideContentBarContent = () => {
  const [allHeadingTexts, setAllHeadingTexts] = useState([])
  const allHeadingsHTMLElem = useRef(null)

  useEffect(() => {
    allHeadingsHTMLElem.current = document.getElementsByTagName("h1")
    setAllHeadingTexts(getTextFromHTMLAndSetID(allHeadingsHTMLElem.current))
    const manageEventListener = function () {
      //only run when there is a side bar
      if (document.getElementById("line-indicator")) {
        manageMainAndSubsections(allHeadingsHTMLElem)
        manageLineIndicator()
      }
    }
    window.addEventListener("scroll", manageEventListener)

    return () => {
      window.removeEventListener("scroll", manageEventListener)
    }
  }, [])

  return (
    <>
      {allHeadingTexts.map((heading, i) => (
        <span
          key={heading}
          id={`sidebar${heading}parent`}
          className={
            allHeadingsHTMLElem.current[i].classList.contains("main-topic")
              ? ""
              : "indented-topic"
          }
          style={{ paddingTop: "1rem" }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              //Indented <a> tag does not work, so this will do for now.
              document.getElementById(heading).scrollIntoView()
              window.location.hash = heading
              setTimeout(() => {
                manageLineIndicator()
              }, 170)
              return true
            }}
            id={`sidebar${heading}`}
            className="sidebar-sections"
            key={heading}
          >
            {heading}
          </span>
        </span>
      ))}
    </>
  )
}

function getTextFromHTMLAndSetID(HTMLArray) {
  const array = []
  for (let obj of HTMLArray) {
    let text = obj.innerHTML
    obj.id = text
    array.push(text)
  }
  return array
}

function manageMainAndSubsections(allHeadingsHTMLElem) {
  manageMainSectionsHighlight(allHeadingsHTMLElem.current)
  manageSubSectionsHighlight()
}
