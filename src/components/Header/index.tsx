import React, { useState } from 'react';
import { FiBox } from 'react-icons/fi';
import styled from 'styled-components';

interface HeaderProps {
  setBoxQuantity: Function
  setBoxSize: Function
}

const colors = {
  primary: '#7327BB',
  secondary: '#000',
  tertiary: '#D5278C',
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${colors.primary};
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.secondary};
  color: #fff;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

const Header = ({setBoxQuantity, setBoxSize}: HeaderProps) => {
  const [tempBoxQuantity, setTempBoxQuantity] = useState(0)
  const [tempBoxSize, setTempBoxSize] = useState(0)

  const onGenerateButtonClick = () => {
    setBoxQuantity(tempBoxQuantity)
    setBoxSize(tempBoxSize)
  }

  return (
    <HeaderWrapper>
      <Title>Flex Box Study</Title>
      <InputWrapper>
        <InputLabel htmlFor="quantity">Box Quantity:</InputLabel>
        <Input type="number" id="quantity" onChange={(e) => setTempBoxQuantity(Number(e.target.value))}/>
        <InputLabel htmlFor="size">Box Size:</InputLabel>
        <Input type="number" id="size" onChange={(e) => setTempBoxSize(Number(e.target.value))}/>
        <Button onClick={onGenerateButtonClick}>
          <FiBox />
          Generate Boxes
        </Button>
      </InputWrapper>
    </HeaderWrapper>
  );
};

export default Header;
