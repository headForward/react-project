import styled from "styled-components";

const Container = styled.div`
  padding: 0.1rem 0.15rem;
  background-color: ${(props) => props.outBg};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.4rem;
    border: ${(props) => (props.hasBorder ? "1px solid #ee742f" : "")};
    border-radius: 0.06rem;
    background-color: ${(props) => props.innerBg};
    svg {
      width: 0.18rem;
      height: 0.18rem;
      margin-right: 0.06rem;
      fill: #ee742f;
    }
    span {
      color: #666;
    }
  }
`;

export { Container };
