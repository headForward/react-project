import { NavBar } from "antd-mobile";
import { MapWrap } from "./StyledMap";
const Map = function () {
  return (
    <MapWrap>
      <NavBar mode="dark">美食地图</NavBar>
      <iframe
        src="/map.html"
        style={{ width: "100%", height: "100%" }}
        title="ifrm"
        frameBorder="0"
      ></iframe>
    </MapWrap>
  );
};

export default Map;
