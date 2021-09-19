import React from "react";
import { FunctionComponent } from "react";

interface DummyComponentProps {
    message: string
}
 
const DummyComponent: FunctionComponent<DummyComponentProps> = (props) => {
    const [message, setMessage] = React.useState('hello world');
    return (
        <React.Fragment>
            <div>{props.message}</div>
            <div>{message}</div>
        </React.Fragment>
    );
}
 
export default DummyComponent;