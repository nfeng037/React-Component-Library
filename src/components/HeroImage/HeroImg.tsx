import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from "./HeroImg.types";

const HeroImageContainer = styled.div<HeroImageProps>`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 400px; // Adjust the height as needed
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  ${(props) => props.disabled && `
    cursor: not-allowed;
    background: none;
    background-color: darkgrey;
  `}
`;

const Title = styled.h1`
  color: #fff;
`;

const Subtitle = styled.h2`
  color: #fff;
`;

const CallToActionButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  Text,
  disabled = false,
  OnClick,
}) => {
  return (
    <HeroImageContainer imageUrl={imageUrl} disabled={disabled}>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {Text && <CallToActionButton onClick={OnClick}>{Text}</CallToActionButton>}
    </HeroImageContainer>
  );
};

export default HeroImage;
