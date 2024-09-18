import React from "react";
import HomePage1 from "./HomePage1";

export const contDom = () => {
  return <div>7</div>;
};

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <div>前往app</div>
        {/* {contDom()} */}
        <About />
        <HomePage1 />
        {HomePage2()}
        <About />
      </>
    );
  }
}

export class About extends React.PureComponent {
  render() {
    return <div>About</div>;
  }
}

const HomePage2 = () => {
  return (
    <>
      <div>HomePage2 </div>
      <HomePage3 />
    </>
  );
};

class HomePage3 extends React.PureComponent {
  render() {
    return (
      <>
        <div>HomePage3</div>
        <HomePage4 />
      </>
    );
  }
}

class HomePage4 extends React.PureComponent {
  render() {
    return (
      <>
        <div>HomePage4</div>
        {contDom()}
        <HomePage5 />
      </>
    );
  }
}

class HomePage5 extends React.PureComponent {
  render() {
    return (
      <>
        <div>HomePage5</div>
        <HomePage6 />
      </>
    );
  }
}

class HomePage6 extends React.PureComponent {
  render() {
    return (
      <>
        <div>HomePage6{contDom()}</div>
      </>
    );
  }
}
