'use client';
import { Image } from '@chakra-ui/react'

import React from 'react';
import styled from 'styled-components';

const GridLinesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const GridLines = () => {
  return (
    <GridLinesContainer>
      {/* Vertical Lines */}
      <VerticalLine style={{ left: 69 }} />
      <VerticalLine style={{ left: 336 }} />
      
      {/* Horizontal Lines */}
      <HorizontalLine style={{ top: 90 }} />
      <HorizontalLine style={{ bottom: 60 }} />
      <Image src='wavy.png' position={'absolute'} w={'100vw'} bottom={0} left={0} />
    </GridLinesContainer>
  );
};

export default GridLines;
