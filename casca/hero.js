import { styled, useStyletron } from 'styletron-react'
import { laranjaPururuca, verdeJilo } from '../lib/colors'
import { TextContainer as Txt, DisplayText } from '../lib/typography'
import * as s from './section'
import * as colors from "../lib/colors"
import { Pururucados } from '../lib/pururucados'
import { Header } from './header'

const Section = styled('section', ({ $color, $vh100 = false, $p = 0 }) => ({
    backgroundColor: colors[$color],
    display: "block",
    padding: $p,
    height: $vh100 ? "100vh" : "auto",
    backgroundSize: "cover",
    backgroundImage: 'url("/images/torremos.jpg")',
    //boxShadow: "inset 0 0 0 2000px rgba(255, 0, 0, 0.3)"
}))

const Container = styled('div', ({ $color, $vh100 = false, $p = 0 }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
}))


export const Hero = ({ children }) => {
    return (
        <Section $color="verdeJilo" $vh100 $p={0}>
            <Header></Header>
            <Container>

                {children}
            </Container>
        </Section>
    )
}
export const Title = ({ children }) => {
    return (
        <DisplayText $size={1} $color="white">{children}</DisplayText>
    )
}
export const TextContainer = ({ children }) => {
    return (
        <div>{children}</div>
    )
}
