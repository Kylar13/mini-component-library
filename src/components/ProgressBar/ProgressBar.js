/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--inner-padding": 0 + "px",
    "--height": 8 + "px",
    "--radius": 4 + "px",
  },
  medium: {
    "--inner-padding": 0 + "px",
    "--height": 12 + "px",
    "--radius": 4 + "px",
  },
  large: {
    "--inner-padding": 4 + "px",
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
      <Mask style={SIZES[size]}>
        <Progress style={SIZES[size]} value={value} />
      </Mask>
      <VisuallyHidden>{`${value}%`}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: var(--radius);
  border: var(--inner-padding) solid transparent;
  overflow: hidden;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(p) => p.value}%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
