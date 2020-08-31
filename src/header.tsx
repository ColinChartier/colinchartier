import React from "react";
import {Tab} from "./tab";

type NavButtonProps = {
    tab: Tab,
    onClick: () => void,
}


function NavButton({tab, onClick}: NavButtonProps) {
    return <li className="nav-item">
        <a href="#" className="nav-link mx-2" onClick={(event) => {
            history.pushState(
                {},
                "Colin Chartier | "+tab.title,
                "/"+tab.id
            );
            event.preventDefault();
            onClick();
        }}>
            {tab.title}
        </a>
    </li>
}

type HeaderProps = {
    tabs: Tab[],
    onTabChange: (tabId: string) => void
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
                    <img
                        className="navbar-brand"
                        src="/static/logo/logo-dark.svg"
                        alt="C2"
                        style={{height: "2em", width: "auto"}}
                    />

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
                                tab={tab}
                                onClick={() => this.props.onTabChange(tab.id)}
                            />)}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }
}