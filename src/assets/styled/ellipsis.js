import styled from "styled-components";

const ellipsis = (WrappedComp) => {
  const EnhancedComp = styled(WrappedComp)`
    width: 200px;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
  `;
  return EnhancedComp;
};

export default ellipsis;
