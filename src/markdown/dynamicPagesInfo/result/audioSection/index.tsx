import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

//Implement image display for possible scores

const index: React.FC<{
  dataArray: [
    {
      audioData: string
      credit?: Array<string>
      recordingInfo?: {
        location?: string
        year?: string
        label?: string
      }
      title: string
    }
  ]
  type: string
}> = ({ dataArray, type }) => {
  return (
    <AudioSection type={type}>
      {dataArray
        ? dataArray.map(data => {
            const { audioData, title, credit, recordingInfo } = data
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
                  <CreditAndRecordingInfoContainer>
                    {recordingInfo ? (
                      <RecordingInfo>
                        {recordingInfo.year || <i>unknown</i>};{" "}
                        {recordingInfo.location || <i>unknown location</i>};
                        Label: {recordingInfo.label || <i>unknown</i>}
                      </RecordingInfo>
                    ) : null}
                    <CreditButtonsContainer>
                      {credit.map(name => {
                        return (
                          <CreditButton
                            onClick={() => openNewTabAndGoogle(name)}
                          >{`${name}`}</CreditButton>
                        )
                      })}
                    </CreditButtonsContainer>
                  </CreditAndRecordingInfoContainer>
                ) : null}
              </>
            )
          })
        : null}
    </AudioSection>
  )
}

export const AlternateAudioPlayer: React.FC<{ link: string }> = ({ link }) => {
  const [playOrPause, setPlayOrPause] = useState<"Play" | "Pause">("Play")
  const wavesurfer = useRef(null)
  const allAudioDiv = useRef(null)
  const [volume, setVolume] = useState(0.5)
  const [timeData, setTimeData] = useState<{
    duration: number
    currentTime: number
  }>({ duration: 0, currentTime: 0 })
  if (!(typeof window != "undefined" && window.document)) {
    return null
  }

  useEffect(() => {
    var WaveSurfer = require("wavesurfer.js")
    const elem = document.getElementById("all-audio-together")
    if (elem) {
      wavesurfer.current = WaveSurfer.create({
        container: allAudioDiv.current,
        waveColor: "#1F271B",
        progressColor: "#ae76c4",
        barWidth: 3,
        responsive: true,
      })
      wavesurfer.current.load(link)
      wavesurfer.current.on("ready", function () {
        setTimeData({
          duration: wavesurfer.current.getDuration(),
          currentTime: timeData.currentTime,
        })
      })
      wavesurfer.current.on("audioprocess", function () {
        setTimeData({
          duration: wavesurfer.current.getDuration(),
          currentTime: wavesurfer.current.getCurrentTime(),
        })
      })
    }
    wavesurfer.current.setVolume(volume)
    return () => wavesurfer.current.destroy()
  }, [])

  function playAudio() {
    if (wavesurfer.current) {
      if (playOrPause === "Play") {
        wavesurfer.current.playPause()
        setPlayOrPause("Pause")
      } else {
        wavesurfer.current.playPause()
        setPlayOrPause("Play")
      }
    }
  }

  function handleChange(newVolume) {
    setVolume(newVolume)
    if (wavesurfer) {
      wavesurfer.current.setVolume(newVolume)
    }
  }

  return (
    <div>
      <AudioControllers>
        {timeData.duration == 0 ? (
          "Audio loading..."
        ) : (
          <>
            <PlayPauseButton
              onClick={() => {
                playAudio()
              }}
            >
              {playOrPause}
            </PlayPauseButton>
            <div
              style={{
                display: "grid",
                placeItems: "center",
                marginTop: "0",
                width: "100%",
              }}
            >
              <VolumeSlider
                type="range"
                step="0.01"
                min="0"
                max="1"
                value={volume}
                id="myRange"
                style={{ width: "100%" }}
                onChange={e => handleChange(e.target.value)}
              />
            </div>
          </>
        )}
      </AudioControllers>

      <div
        style={{ cursor: "pointer", height: "auto", marginTop: "0 !important" }}
        ref={allAudioDiv}
        id="all-audio-together"
      ></div>
      <TimeDisplayContainer>
        {timeData.currentTime / 60 + " / " + timeData.duration / 60}
      </TimeDisplayContainer>
    </div>
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

const CreditAndRecordingInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  & > * {
    margin-top: 0.7em !important;
  }
  margin-top: 0.7em !important;
`
const CreditButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 801px) {
    justify-content: center;
    overflow-x: auto;
  }
  @media only screen and (max-width: 800px) {
    justify-content: flex-start;
    overflow-x: scroll;
  }
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

const RecordingInfo = styled.p`
  color: white;
  font-size: 12px !important;
  text-indent: 0mm !important;
`
const PlayPauseButton = styled.div`
  background-color: ${props => props.theme.colors.mainMagenta};
  width: 7.5em;
  height: fit-content;
  text-align: center;
  padding: 0.75em 1.75em;
  border-radius: 6px;
  margin-right: 3rem;
  color: white;
  cursor: pointer;
`

const AudioControllers = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column !important;
  }
`

const VolumeSlider = styled.input`
  @media only screen and (max-width: 800px) {
    margin-top: 2rem !important;
  }
`

const TimeDisplayContainer = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
`

function openNewTabAndGoogle(name: string) {
  const url = "https://www.google.com/search?q="
  const combined = url + name
  window.open(combined)
}

export default index
