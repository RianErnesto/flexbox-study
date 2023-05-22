import styled from "styled-components";

interface CanvaProps {
    boxQuantity: number
    boxSize: number
    flexDirection: string
    flexWrap: string
    justifyContent: string
    alignItems: string
}

type ContainerProps = {
    flexDirection: string
    flexWrap: string
    justifyContent: string
    alignItems: string
}

type BoxProps = {
    size: number
}

const Canva = ({ boxQuantity, boxSize, flexDirection, flexWrap, justifyContent, alignItems }: CanvaProps) => {
    return (
        <Container flexDirection={flexDirection} flexWrap={flexWrap} justifyContent={justifyContent} alignItems={alignItems}>
            {Array(boxQuantity).fill('a').map((e, i) => (
                <Box key={i} size={boxSize}>
                    {i}
                </Box>
            ))}
        </Container>
    )
}

const Container = styled.main<ContainerProps>`
    display: flex;
    min-height: 50vh;
    width: 100%;
    flex-direction: ${({ flexDirection }) => flexDirection};
    flex-wrap: ${({ flexWrap }) => flexWrap};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    background-color: #8137c6;
`

const Box = styled.div<BoxProps>`
    display: block;
    border: 1px solid #00344d;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: #00A7F6;
`

export default Canva