import React from "react";
import {Link} from "react-router-dom";

let essays = [
    {
        id: "unconventional-investing",
        title: "Unconventional investing",
        date: "2021-03-24"
    },
    {
        id: "everyone-wants-what-someone-else-has",
        title: "Everyone wants what someone else has",
        date: "2020-08-30"
    },
]

type EssaysState = {
    currEssayId: string | null,
    essayBody: string
}

export default function Essays(props: any) {
    return <div className="container">
        <ol>
            {essays.map(x => <li key={x.id}>
                <Link to={"/essays/"+x.id}>
                    {x.title}
                </Link>
            </li>)}
        </ol>
    </div>
}
