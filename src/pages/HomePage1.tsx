import React from "react";
import { About } from "./HomePage";

export const contDom1 = () => <div>66</div>;

export default class HomePage1 extends React.Component {
  render() {
    return (
      <>
        <h1>Home 1</h1>
        <div>数字值 </div>
        <button>增加 </button>
        <button>减</button>
        <div>前往app2</div>
        {contDom1()}
        <About />
      </>
    );
  }
}

class About1 extends React.PureComponent {
  render() {
    return <div>About1</div>;
  }
}
