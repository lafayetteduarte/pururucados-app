import { styled } from 'styletron-react'
import { verdeJilo } from '../lib/colors'
import { Pururucados } from '../lib/pururucados'

export const StyledHeader = styled("header", () => ({
    position: 'fixed',
    width: '100%'
}))

export const Container = styled("div", () => ({
    margin: "28px 0",
    textAlign: "center"
}))

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Pururucados />
            </Container>
        </StyledHeader>
    )
}