import styled from "styled-components";

const HomeStyled = styled.div`
  .am-tabs-content-wrap {
    background-color: #f0f0f0 !important;
  }

  .am-tab-bar-tab:nth-child(3) {
    display: ${(props) => (props.MapChecked ? "flex" : "none")};
  }
`;

export { HomeStyled };
