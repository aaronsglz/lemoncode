import * as React from 'react';
import { HelloComponent } from './hello-component/hello';


export class App extends React.Component {
    render() {
        return (
            <>
                <HelloComponent/>
            </>
        )
    }
}