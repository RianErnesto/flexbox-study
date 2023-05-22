import styled from 'styled-components';
import { attributes } from '@/model/attributes';

interface SecondaryHeaderProps {
    setFlexDirection: Function
    setFlexWrap: Function
    setAlignItems: Function
    setJustifyContent: Function
}

const colors = {
    primary: '#7327BB',
    secondary: '#000',
    tertiary: '#D5278C',
};

const SecondaryHeader = ({ setAlignItems, setFlexDirection, setFlexWrap, setJustifyContent }: SecondaryHeaderProps) => {
    return (
        <Container>
            <Section>
                <Title>Flex-Direction</Title>
                <ToolTipText>A propriedade CSS flex-direction define como os itens flexíveis são colocados no contêiner flexível, definindo o eixo principal e a direção (normal ou invertido).</ToolTipText>
                <RadioGroup>
                    {
                        attributes.flexDirectionValues.map(({ name, value, description }) => (
                            <div key={name}>
                                <RadioLabel htmlFor={value}>{name}</RadioLabel>
                                <ToolTipText>{description}</ToolTipText>
                                <RadioInput type="radio" id={value} name="flex-direction" value={value} onClick={(e) => setFlexDirection(e.target.value)} />
                            </div>
                        ))
                    }
                </RadioGroup>
            </Section>
            <Section>
                <Title>Flex-Wrap</Title>
                <ToolTipText>A propriedade CSS flex-wrap define se os itens flexíveis são forçados a ficarem na mesma linha ou se podem ser quebradas em varias linhas. Se o argumento for valido, ele define a direção em que as linhas são empilhadas.</ToolTipText>
                <RadioGroup>
                    {attributes.flexWrapValues.map(({ name, value, description }) => (
                        <div key={name}>
                            <RadioLabel htmlFor={value}>{name}</RadioLabel>
                            <ToolTipText>{description}</ToolTipText>
                            <RadioInput type="radio" id={value} name="flex-wrap" value={value} onClick={(e) => setFlexWrap(e.target.value)} />
                        </div>
                    ))}
                </RadioGroup>
            </Section>
            <Section>
                <Title>Justify-Content</Title>
                <ToolTipText>A propriedade justify-content do CSS define como o navegador distribui o espaço entre e ao redor dos itens de conteúdo ao longo do eixo principal de um contêiner flexível e o eixo embutido de um contêiner de grade.</ToolTipText>
                <RadioGroup>
                    {attributes.justifyContentValues.map(({ name, value, description }) => (
                        <div key={name}>
                            <RadioLabel htmlFor={value}>{name}</RadioLabel>
                            <ToolTipText>{description}</ToolTipText>
                            <RadioInput type="radio" id={value} name="justify-content" value={value} onClick={(e) => setJustifyContent(e.target.value)} />
                        </div>
                    ))}
                </RadioGroup>
            </Section>
            <Section>
                <Title>Align-Items</Title>
                <ToolTipText>A propriedade CSS align-items define o valor align-self em todos os filhos diretos como um grupo. No Flexbox, controla o alinhamento dos itens no Eixo Cruzado. No Layout de Grade, ele controla o alinhamento dos itens no Eixo do Bloco dentro de sua área de grade.</ToolTipText>
                <RadioGroup>
                    {attributes.alignItemValues.map(({ name, value, description }) => (
                        <div key={name}>
                            <RadioLabel htmlFor={value}>{name}</RadioLabel>
                            <ToolTipText>{description}</ToolTipText>
                            <RadioInput type="radio" id={value} name="align-items" value={value} onClick={(e) => setAlignItems(e.target.value)} />
                        </div>
                    ))}
                </RadioGroup>
            </Section>
        </Container>
    )
}

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 1rem;
  background-color: ${colors.primary};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  div {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
`;

const ToolTipText = styled.span`
    position: absolute;
    max-width: 80%;
    left: 20px;
    bottom: 5%;
    background-color: #000;
    color: #FFF;
    line-height: 1.5rem;
    padding: 10px 15px;
    border-radius: 7px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;
`

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  width: fit-content;
  border-bottom: 2px dotted;

  :hover ~ ${ToolTipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: white;
  cursor: pointer;
  border-bottom: 1px dotted;

  :hover {
    color: ${colors.secondary};

    ~ ${ToolTipText} {
    visibility: visible;
    opacity: 1;
    }
  }
`;

export default SecondaryHeader