import React from 'react';
import styled from 'styled-components';
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  background-color: lightgrey;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  ${(props) => props.disabled && `
    background-color: lightgrey;
    cursor: not-allowed;
    color: #darkgrey;
  `}
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
