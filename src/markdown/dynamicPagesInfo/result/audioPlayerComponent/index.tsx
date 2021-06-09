import React from "react"
import styled from "styled-components"

const index: React.FC<{
  dataArray: [
    {
      audioData: string
      credit?: Array<string>
      title: string
    }
  ]
  type: string
}> = ({ dataArray, type }) => {
  return (
    <AudioSection type={type}>
      {dataArray
        ? dataArray.map(data => {
            const { audioData, title, credit } = data
            return (
              <>
                <AudioData>
                  <Title>
                    {type === "original"
                      ? `${title} (original)`
                      : `${title} (arranged)`}
                  </Title>

                  <AudioPlayer controls>
                    <source src={audioData} type="audio/mpeg" />
                  </AudioPlayer>
                </AudioData>
                {credit ? (
                  <CreditButtonsContainer>
                    {credit.map(name => {
                      return (
                        <CreditButton
                          onClick={() => openNewTabAndGoogle(name)}
                        >{`${name}`}</CreditButton>
                      )
                    })}
                  </CreditButtonsContainer>
                ) : null}
              </>
            )
          })
        : null}
    </AudioSection>
  )
}

const AudioSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  &:hover {
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
      rgba(71, 63, 79, 0.16) 0px 8px 24px;
  }
  transition: 0.2s;
  padding: 1rem;
  background-color: ${props =>
    props.type === "original"
      ? props.theme.colors.backgroundBlue
      : props.theme.colors.backgroundPurple};
`

const CreditButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CreditButton = styled.div`
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.mainMagenta};
  }
  color: white;
  padding: 0.6rem 0.8rem;
  margin-left: 0.2rem;
  border-radius: 3px;
  margin-top: 0 !important;
  font-size: 0.7rem;
  height: fit-content;
  transition: 0.2s;
  background-color: ${props => props.theme.colors.mainBlack};
`

const AudioPlayer = styled.audio`
  width: 100%;
  margin: 1rem !important;
  @media only screen and (max-width: 300px) {
    width: 80%;
  }
`

const AudioData = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 800px) {
    &:not(:first-child) {
      border-top: 1px solid #181515;
    }
    padding-top: 0.75rem;
    flex-direction: column !important;
  }
`

const Title = styled.span`
  font-size: 0.8rem;
  color: white;
  text-align: center;
`

function openNewTabAndGoogle(name: string) {
  const url = "https://www.google.com/search?q="
  const combined = url + name
  window.open(combined)
}

export default index
