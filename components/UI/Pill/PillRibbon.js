import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaInfoCircle } from "react-icons/fa";
import useMediaQuery from '../../../hooks/useMediaQuery';
import Popover from 'react-bootstrap/Popover';

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

const IconWrapper = styled.span`
  cursor: pointer;
  margin-left: 5px;
`;

const PillRibbonMobile = ({ type }) => {
	const [showPopover, setShowPopover] = useState(false);
	const target = useRef(null);

	const handleClick = useCallback(() => {
		setShowPopover(!showPopover);
	}, [showPopover]);

	const popoverContent = type === DANGER
		? "No consumir! Hay reportes de intoxicación."
		: "De ser posible, no consumir. Si se consume, consumir muy pocas cantidades y no redosificar.";

	return (
		<RibbonWrapper>
			<Ribbon type={type}>
				{type === DANGER ? 'PELIGROSA' : 'PRECAUCION'}
				<IconWrapper
					ref={target}
					onClick={handleClick}
				>
					<FaInfoCircle />
				</IconWrapper>
			</Ribbon>

			<Overlay
				show={showPopover}
				target={target.current}
				placement="left"
				containerPadding={20}
			>
				<Popover id="popover-basic">
					<Popover.Body>{popoverContent}</Popover.Body>
				</Popover>
			</Overlay>
		</RibbonWrapper>
	);
};

const PillRibbonDesktop = ({ type }) => {

	const tooltipContent = type === DANGER
		? "No consumir! Hay reportes de intoxicación."
		: "De ser posible, no consumir. Si se consume, consumir muy pocas cantidades y no redosificar.";

	const renderTooltip = (props) => (
		<Tooltip id="ribbon-tooltip" {...props}>
			{tooltipContent}
		</Tooltip>)

	return (
		<>
			<OverlayTrigger
				placement="top"
				delay={{ show: 250, hide: 400 }}
				overlay={renderTooltip}>
				<RibbonWrapper>
					<Ribbon type={type}>
						{type === DANGER ? 'PELIGROSA' : 'PRECAUCION'}
					</Ribbon>
				</RibbonWrapper>
			</OverlayTrigger>
		</>
	);
};

const PillRibbon = ({ type }) => {
	if (!type) return null;

	const isMobile = useMediaQuery('(max-width: 768px)');

	return isMobile
		? <PillRibbonMobile type={type} />
		: <PillRibbonDesktop type={type} />;
};

export default PillRibbon;