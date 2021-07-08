import { Container } from "./StyledCookBook";
import memoize from "memoize-one"; //类似计算属性
import propTypes from "prop-types";
import Swiper from "./Swiper";
import Search from "@c/search/Search";
import HotCate from "./HotCate";
import Top10 from "./Top10";

const CookBookUi = (props) => {
  console.log("props", props);
  const swiper = memoize((list) => {
    return list.slice(0, 5);
  });
  const top10 = memoize((list) => list.slice(0, 10));
  return (
    <div>
      <Container>
        <header>美食大全</header>
        <Swiper list={swiper(props.list)}></Swiper>
        <Search outBg="" innerBg="#fff" hasBorder={true}></Search>
        <HotCate></HotCate>
        <Top10 list={top10(props.list)}></Top10>
      </Container>
    </div>
  );
};

CookBookUi.propTypes = {
  list: propTypes.array,
};

export default CookBookUi;
