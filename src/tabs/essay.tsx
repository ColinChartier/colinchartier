import React from "react";
import ReactMarkdown from "react-markdown";
import {RouteComponentProps} from "react-router";
import {Link} from "react-router-dom";

type EssayProps = {
    id: string,
}

type EssayState = {
    body: string
}

export default class Essay extends React.Component<RouteComponentProps<EssayProps>, EssayState> {
    constructor(props: RouteComponentProps<EssayProps>) {
        super(props);

        this.state = {
            body: "",
        }
    }

    async componentDidMount() {
        let x = await fetch("/static/essays/" + this.props.match.params.id+".md");
        this.setState({body: await x.text()});
    }

    render() {
        return (
            <div className="container">
                <ReactMarkdown source={this.state.body}/>
                <Link to="/essays">Back to essays</Link>
            </div>
        );
    }
}