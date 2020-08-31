import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header";
import {Tab} from "./tab";
import AboutMe from "./tabs/about-me";
import Essays from "./tabs/essays";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Essay from "./tabs/essay";


export default class App extends React.Component<any, any> {
    tabs: { [key: string]: Tab }

    constructor(props: any) {
        super(props);

        this.tabs = {
            "": {
                id: "",
                body: <AboutMe/>,
                title: "About me",
            },
            "essays": {
                id: "essays",
                body: <Essays/>,
                title: "Essays",
            },
        }

        setTimeout(window.onpopstate, 0);
    }

    render() {
        return <Router>
            <div>
                <Header
                    tabs={Object.keys(this.tabs).map(x => this.tabs[x])}
                />
                <Switch>
                    {Object.keys(this.tabs).map(id => <Route path={"/"+id} exact key={id}>
                        {this.tabs[id].body}
                    </Route>)}
                    <Route path="/essays/:id" component={Essay} />
                </Switch>
            </div>
        </Router>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app"),
)