import styled from "styled-components";

const StyledCategoryUi = styled.div`
  overflow: hidden;
  height: 100%;
  background-color: #efefef;
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.44rem;
    background-color: #ee742f;
    ul {
      position: relative;
      display: flex;
      width: 1.4rem;
      height: 0.3rem;
      border: 1px solid #fff;
      border-radius: 0.2rem;
      li {
        flex: 1;
        line-height: 0.3rem;
        text-align: center;
        color: #fff;
        z-index: 3;
      }
      .active {
        color: #ee742f;
        z-index: 3;
      }
      .slide {
        position: absolute;
        left: 0;
        width: 0.7rem;
        background-color: #fff;
        height: 0.3rem;
        z-index: 2;
        border-radius: 0.2rem;
      }
      .right {
        left: 0.7rem;
      }
      /* li:hover{
        border-radius: 20px;
        border: 1px solid #fff;
        background: #fff;
        color: #ee742f;
      } */
    }
  }
`;

const MenuWrap = styled.div`
  border-top: 1px solid #ccc;
  height: calc(100vh - 0.44rem - 0.44rem - 0.2rem - 50px);
  overflow: hidden;
  flex: 1;
  display: flex;
  aside {
    overflow-y: scroll;
    width: 0.9rem;
    ul {
      li {
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
      }
    }
    .active {
      background-color: #fff;
      color: #ee742f;
      span {
        display: inline-block;
        height: 100%;
        border-bottom: 1px solid #ee743f;
      }
    }
  }
  section {
    overflow-y: scroll;
    flex: 1;
    padding: 0.25rem;
    background-color: #fff;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.333333%;
        height: 0.45rem;
        text-align: center;
      }
    }
  }
`;

export { StyledCategoryUi, MenuWrap };
