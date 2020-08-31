import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import {Tab} from "./tab";
import AboutMe from "./tabs/about-me";
import Essays from "./tabs/essays";

type MainState = {
    currTabId: string,
}

export default class App extends React.Component<any, MainState> {
    tabs: { [key:string]:Tab }

    constructor(props: any) {
        super(props);

        this.state = {
            currTabId: "",
        }

        this.tabs = {
            "": {
                id: "",
                body: <AboutMe />,
                title: "About me",
            },
            "essays": {
                id: "essays",
                body: <Essays />,
                title: "Essays",
            },
        }
    }

    render() {
        return <div>
            <Header
                tabs={Object.keys(this.tabs).map(x => this.tabs[x])}
                onTabChange={tabId => this.setState({currTabId: tabId})}
            />
            {this.tabs[this.state.currTabId].body}
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app"),
)