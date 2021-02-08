// DOCUMENTATION: http://styletron.org

import { styled, useStyletron } from 'styletron-react'
import * as hero from '../casca/hero'
import * as colors from "../lib/colors";
import * as s from '../casca/section'
import { DisplayText, P } from "../lib/typography"

// statically styled component
const Title = styled('h1', {
  color: 'red',
  fontSize: '82px',
})

// dynamically styled component
const SubTitle = styled('h2', ({ $size }) => ({
  color: 'blue',
  fontSize: `${$size}px`,
}))

const themeColors = {

}


const Intro = styled('div', ({ $color }) => ({
  width: "50%",
  maxWidth: "550px",
}))

const Content = styled('div', ({ $color }) => ({
  width: "50%",
  maWidth: "75%",
}))


export default function Home() {
  // an alternative hook based API
  const [css] = useStyletron()
  return (
    <>
      <hero.Hero>
        <hero.TextContainer>
          <hero.Title>amigos.</hero.Title>
          <hero.Title>torresmo.</hero.Title>
          <hero.Title>alegria.</hero.Title>
        </hero.TextContainer>
      </hero.Hero>
      <s.Section $color="vermelhoProteina">
        <s.Container>
          <s.Row>
            <Intro>
              <DisplayText>Purucados é  a long established fact that a reader will be distracted by the readable content.</DisplayText>
            </Intro>
            <Content>
              <P>Purucados é a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</P>
              <P>Purucados é  a long established fact that a reader will be distracted by the.</P>
              <P>Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</P>
            </Content>
          </s.Row>
        </s.Container>
      </s.Section>
    </>
  )
}
