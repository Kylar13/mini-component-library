/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--radius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={SIZES[size]}
    >
      <Mask style={SIZES[size]} hasInnerPadding={size === "large"}>
        <Progress style={SIZES[size]} value={value} hasInnerPadding={size === "large"} />
      </Mask>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  background-color: hsla(0, 0%, 50%, 0.15);
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: var(--radius);
  border: ${(p) => (p.hasInnerPadding ? 4 : 0)}px solid transparent;
  overflow: hidden;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(p) => ((370 - (p.hasInnerPadding ? 8 : 0)) / 100) * p.value}px;
  background: hsla(240, 80%, 60%, 1);
`;

export default ProgressBar;
