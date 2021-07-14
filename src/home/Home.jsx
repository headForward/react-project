import react from "react";
import { TabBar } from "antd-mobile";
import cookbook from "@a/images/cookbook.png";
import cookbookActive from "@a/images/cookbook-active.png";

import location from "@a/images/location.png";
import locationActive from "@a/images/location-active.png";

import menu from "@a/images/menu.png";
import menuActive from "@a/images/menu-active.png";

import more from "@a/images/more.png";
import moreActive from "@a/images/more-active.png";

import { CookBook } from "./cookbooks/index";
import { HomeStyled } from "./StyledHome";
import { Category } from "./category/index";
import Map from "./map/Map.jsx";
import animate from "../hoc/animate";

import { More } from "./more/index";
import { connect } from "react-redux";

const mapStateProps = (state) => {
  return state.more;
};
@animate
@connect(mapStateProps, null)
class Home extends react.Component {
  1;
  state = {
    selectedTab: "cookbooks",
    hidden: false,
    fullScreen: true,
  };
  render() {
    return (
      <HomeStyled MapChecked={this.props.MapChecked}>
        <div
          style={
            this.state.fullScreen
              ? { position: "fixed", height: "100%", width: "100%", top: 0 }
              : { height: 400 }
          }
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#000"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition="bottom"
          >
            <TabBar.Item
              title="美食大全"
              key="cookbook"
              icon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${cookbook}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${cookbookActive}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              selected={this.state.selectedTab === "cookbook"}
              onPress={() => {
                this.setState({
                  selectedTab: "cookbook",
                });
              }}
              data-seed="logId"
            >
              <div>
                <CookBook></CookBook>
              </div>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${menu}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${menuActive}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              title="分类"
              key="category"
              selected={this.state.selectedTab === "category"}
              onPress={() => {
                this.setState({
                  selectedTab: "category",
                });
              }}
              data-seed="logId1"
            >
              <Category></Category>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${location}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${locationActive}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              title="美食地图"
              key="map"
              selected={this.state.selectedTab === "map"}
              onPress={() => {
                this.setState({
                  selectedTab: "map",
                });
              }}
            >
              <Map></Map>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${more}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    background: `url(${moreActive}) center center /  26px 26px no-repeat`,
                  }}
                />
              }
              title="更多"
              key="more"
              selected={this.state.selectedTab === "more"}
              onPress={() => {
                this.setState({
                  selectedTab: "more",
                });
              }}
            >
              <More></More>
            </TabBar.Item>
          </TabBar>
        </div>
      </HomeStyled>
    );
  }
  componentDidMount() {}
}

export default Home;
