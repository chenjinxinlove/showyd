import * as React from 'react';
import {Tab} from './components/tab';
import './config/rem';

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {
  constructor () {
    super();
    this.state = {
      active: 'pv'
    };
  }
  changeActive = (select) => {
    console.log(select);
    this.setState({
      active: select
    });
  }
  render() {
    return (
      <div>
        <Tab active={this.state} changeActive={this.changeActive}></Tab>
      </div>
    );
  }
}
