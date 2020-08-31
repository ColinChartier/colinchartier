import React from "react";

export type Tab = {
    id: string,
    title: string,
    body: React.FunctionComponentElement<any>,
}