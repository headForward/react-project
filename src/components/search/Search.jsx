import React, { Component } from "react";
import { Container } from "./styledSearch";
class Search extends Component {
  render() {
    return (
      <Container {...this.props}>
        <div>
          <svg
            t="1625214164168"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2659"
            width="200"
            height="200"
          >
            <path
              d="M937.4 846.1l-230-230c38.9-56.6 61.7-125.2 61.7-199.1 0-194.4-157.6-352-352-352S65 222.6 65 417s157.6 352 352 352c74.3 0 143.2-23 200-62.3l229.9 229.9c25 25 65.5 25 90.5 0 25-24.9 25-65.5 0-90.5zM417 641.2c-123.8 0-224.1-100.3-224.1-224.1S293.3 192.9 417 192.9 641.2 293.3 641.2 417 540.8 641.2 417 641.2z"
              fill="#ee742f"
              p-id="2660"
            ></path>
          </svg>
          <span>想吃什么搜这里，如川菜</span>
        </div>
      </Container>
    );
  }
}

export default Search;
