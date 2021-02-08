
import { styled, useStyletron } from 'styletron-react'
import * as colors from "../lib/colors"

export const Section = styled('section', ({ $color, $vh100 = false }) => ({
    backgroundColor: colors[$color],
    padding: "100px 0;",
    display: "block",
    paddingTop: "160px",
    height: $vh100 ? "100vh" : "auto"
}))

export const Container = styled('div', ({ $color }) => ({
    padding: "0 80px",
    marginLeft: 'auto',
    marginRight: 'auto',
}));

export const Row = styled('div', ({ $color }) => ({
    textAlign: "left",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "0 7.5%",
}))