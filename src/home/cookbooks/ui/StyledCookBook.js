import styled from "styled-components";

const Container = styled.div`
  header {
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.16rem;
    color: #fff;
    background-color: #ee742f;
  }
`;

const SwiperWrap = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: 66.66667%;
  position: relative;
  .am-carousel {
    position: static !important;
  }
`;

const HotCateWrap = styled.div`
  h1 {
    height: 0.5rem;
    padding-left: 0.1rem;
    color: #666;
    line-height: 0.5rem;
    font-weight: normal;
    background-color: #fff;
    border-bottom: solid 1px #ccc;
  }
  > div {
    padding-top: 0.2rem;
    background-color: #fff;
    .am-grid-item-content {
      padding: 0 !important;
    }
    .grid-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin-bottom: 0.04rem;
        border-radius: 0.06rem;
        &[src="blank"] {
          visibility: hidden;
        }
      }
      /* &:last-child {
        img {
          display: none;
        }
      } */
    }
  }
`;

const Top10Wrap = styled.div`
  h1 {
    height: 0.5rem;
    padding-left: 0.1rem;
    color: #666;
    line-height: 0.5rem;
    font-weight: normal;
    /* background-color: #fff; */
    border-bottom: solid 1px #ccc;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-left: 0.1rem;
    li {
      width: 50%;
      padding-right: 0.1rem;
      img {
        width: 100%;
        height: 130px;
      }
      > div:last-child {
        height: 0.6rem;
        background-color: #fff;
        margin-bottom: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > p:first-child {
          font-size: 0.18rem;
        }
        > p:last-child {
          color: #666;
          font-size: 0.1rem;
        }
      }
    }
  }
`;

export { Container, SwiperWrap, HotCateWrap, Top10Wrap };
