import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const CardContainer = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  max-width: 300px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${(props) => props.disabled && `
  cursor: not-allowed;
  background: none;
  background-color: darkgrey;
`}
`;

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin-top: 10px;
`;

const Content = styled.p`
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const Card: React.FC<CardProps> = ({
  imageurl,
  title,
  content,
  buttonText,
  onButtonClick,
  disabled
}) => {
  return (
    <CardContainer disabled={disabled}>
      {imageurl && <Image src={imageurl} alt={title} />}
      <Title>{title}</Title>
      <Content>{content}</Content>
      {buttonText && <Button onClick={onButtonClick} disabled={disabled}>{buttonText}</Button>}
    </CardContainer>
  );
};


export default Card;
