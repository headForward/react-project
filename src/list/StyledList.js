import styled from "styled-components";
import border from "../assets/styled/border";
import ellipsis from "../assets/styled/ellipsis";

const H2Wrap = ellipsis(styled.h2``);

const ListWrap = border(
  styled.div`
    height: 100%;
    .am-navbar {
      background-color: #ee742f;
    }
    ul {
      height: calc(100vh - 45px);
      overflow: scroll;
    }
    li {
      display: flex;
      padding: 0.1rem;
      background-color: #fff;
      img {
        margin-right: 0.15rem;
        width: 115px;
        height: 75px;
      }
      > div:last-child {
        h1 {
          font-size: 0.16rem;
          line-height: 0.3rem;
        }
        h2 {
          font-weight: normal;
        }
        h3 {
          font-size: 0.12rem;
          font-weight: normal;
          transform: scale(1);
          transform-origin: 0, 0;
          line-height: 0.3rem;
        }
      }
    }
  `
);

export { ListWrap, H2Wrap };
