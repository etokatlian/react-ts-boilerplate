import * as React from "react";

export interface HelloProps {}

export interface HelloState {}

export class Hello extends React.Component<HelloProps, HelloState> {
  render() {
    return <h1>React/TS Boilerplate</h1>;
  }
}
