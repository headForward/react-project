import styled from "styled-components";

const border = (WrappedComp) => {
  const EnhancedComp = styled(WrappedComp)`
    li {
      border-bottom: 1px solid #ccc;
    }
  `;
  return EnhancedComp;
};

export default border;
