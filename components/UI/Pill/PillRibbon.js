import React from 'react';
import styled from 'styled-components';

const DANGER = 2;

const RibbonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  overflow: hidden;
 z-index: 1;

  @media (max-width: 768px) {
	width: 150px;
	height: 150px;
  }
`;

const Ribbon = styled.div`
  position: absolute;
  top: 35px;
  right: -50px;
  width: 240px;
  padding: 15px 0;
  background-color: ${props => props.type === DANGER ? '#dc3545' : '#ffc107'};
  color: ${props => props.type === DANGER ? '#fff' : '#000'};
  text-align: center;
  transform: rotate(45deg);
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  font-size: 16px;

  @media (max-width: 768px) {
    top: 25px;
    right: -45px;
    width: 200px;
    padding: 10px 0;
    font-size: 14px;
  }
`;

const PillRibbon = ({ type }) => {
	if (!type) return null;

	return (
		<RibbonWrapper>
			<Ribbon type={type}>
				{type === DANGER ? 'PELIGRO' : 'CUIDADO'}
			</Ribbon>
		</RibbonWrapper>
	);
};

export default PillRibbon;