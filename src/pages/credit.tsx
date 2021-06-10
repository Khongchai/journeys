import React from "react"
import styled from "styled-components"
import { CreditPage, Cards } from "../components"

export default function Credit() {
  return (
    <CreditPage>
      <Cards />
      <AcknowledgementContainer>
        <h3>Acknowledgement</h3>
        <div>
          <Text>
            I would like to give a humongous piece of “Thank you” to both prof.
            Hayne Kim and Dr. Jean David for having been with me all the way
            from the beginning. This year couldn’t be ending with a more
            appropriate title for a project. Indeed, these past 4 years have
            been quite a journey. With these two’s guidance, I have matured both
            musically and academically, they have been both instructors and
            friends.
          </Text>

          <Text>
            I would like to also thank my girlfriend for her moral support and
            her having helped me a bit with the UX/UI aspect of the website, and
            my parents, for their undying support for whatever I do.
          </Text>

          <Text>
            Seeing that this will be my last undergraduate research project, I
            would like to also thank the rest of the staff at PGVIM and
            instructors and staff for their hard work, especially Dr. Jiradej.
            Having always been a self-taught composer, his music theory class
            has been of great help in me realizing my dream of understanding and
            being able to create the type of music I could have only dreamt and
            hoped of doing.
          </Text>
        </div>
      </AcknowledgementContainer>
    </CreditPage>
  )
}

const AcknowledgementContainer = styled.div`
  width: clamp(300px, 50%, 700px);
  margin-left: clamp(1rem, 4%, 6rem);
  padding: clamp(1rem, 4%, 5rem);
  margin-bottom: 200px;
`
const Text = styled.p`
  text-indent: 3rem;
  margin-top: 2rem;
  font-size: 14px;
  line-height: 1.875rem;
`
