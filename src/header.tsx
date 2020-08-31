import React from "react";
import {Tab} from "./tab";
import {Link} from "react-router-dom";

type NavButtonProps = {
    tab: Tab,
}

function NavButton({tab}: NavButtonProps) {
    return <li className="nav-item">
        <Link
            to={"/" + tab.id}
        >
            {tab.title}
        </Link>
    </li>
}

type HeaderProps = {
    tabs: Tab[],
};

type HeaderState = {
    collapsed: boolean,
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: any) {
        super(props);

        this.state = {
            collapsed: true,
        }
    }

    render() {
        return <header>
            <nav className="navbar navbar-light navbar-expand-md">
                <div className="container mx-auto px-0 my-0">
                    <Link to="/">
                        <img
                            className="navbar-brand"
                            src="/static/logo/logo-dark.svg"
                            alt="C2"
                            style={{height: "2em", width: "auto"}}
                        />
                    </Link>

                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            onClick={() => this.setState(({collapsed}) => ({collapsed: !collapsed}))}
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div
                        id="navbarSupportedContent"
                        className={"navbar-collapse collapse" + (this.state.collapsed ? "" : " show")}
                    >
                        <ul className="navbar-nav ml-auto mr-sm-1 mr-lg-3">
                            {this.props.tabs.map(tab => <NavButton
                                key={tab.id}
                                tab={tab}
                            />)}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }
}