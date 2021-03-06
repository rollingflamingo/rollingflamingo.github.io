import React from 'react';
import './App.scss';

import HeroBanner from "./component/hero-banner/HeroBanner";
import "./component/fontawesome/fontawesome";
import BuildingDisclaimer from "./component/static/BuildingDisclaimer";
import MyCard from "./component/static/MyCard";
import ThemeContext from "./component/theme/ThemeContext";
import Navbar from "./component/navbar/Navbar";
import ThemeToggle from "./component/toggle/src/ThemeToggle";

interface IAppProps {

}

interface IAppState {
  theme: 'light' | 'dark';
}

export default class App extends React.Component<IAppProps, IAppState>{

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      theme: "dark"
    }

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  private toggleTheme() {
    this.setState({
      theme: this.state.theme === 'light'
        ? 'dark'
        : 'light'
    });
  }

  public render() {
    return (
      <div className="App">
          <ThemeContext.Provider value={{
            theme: this.state.theme,
            themeToggle: this.toggleTheme
          }}>
            <Navbar
              rightContent={
                <ThemeToggle id={`theme-switch`} onClick={this.toggleTheme}/>
              }
            />
            <HeroBanner
              leftContent={<BuildingDisclaimer/>}
              rightContent={<MyCard/>}
            />
            <div className={`temp-disclaimer ${this.state.theme}`}>
              <BuildingDisclaimer/>
            </div>
          </ThemeContext.Provider>
      </div>
  );
  }
}
