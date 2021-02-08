import { styled, useStyletron } from 'styletron-react'
import * as colors from './colors'

const alfa = "'Alfa Slab One', cursive"
const merriweather = "'Merriweather', serif"

const Intro = styled('div', ({ $color }) => ({
    width: "50%",
    maxWidth: "550px",
}))
const TextBase = styled('div', ({ $color }) => ({
    width: "50%",
    maxWidth: "550px",
}))


const displayTextSize = {
    1: {
        fontSize: "90px"
    },
    2: {
        fontSize: "60px"
    },
    3: {
        fontSize: "40px"
    },
    4: {
        fontSize: "28px"
    }
}

export const TextContainer = styled('div', ({ $size = 1, $align = 'left' }) => ({
    align: $align,
    fontSize: displayTextSize[$size].fontSize,
}))

export const DisplayText = styled('p', ({ $size = 4, $color }) => ({
    fontFamily: alfa,
    fontSize: displayTextSize[$size].fontSize,
    margin: 0,
    padding: 0,
    lineHeight: 1,
    ...() => $color && { color: colors[$color] }
}))

export const P = styled('p', ({ $color }) => ({
    fontFamily: merriweather,
    fontSize: "18px",
    lineHeight: 1.4,
    marginBottom: 1.4,
}))