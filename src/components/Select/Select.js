import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
      <VisibleSelect>
        <DisplayText>{displayedValue}</DisplayText>
        <IconWrapper id="chevron-down" size={24} strokeWidth={2} />
      </VisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const VisibleSelect = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: 0;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;

  ${InvisibleSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const DisplayText = styled.p`
  display: inline-block;
  padding-right: 36px;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
