import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

/* export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
); */
export default class Layout  extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        const children = this.props.children;
        return(
            <React.Fragment>
                <NavMenu/>
                <Container>
                    {children}
                </Container>
            </React.Fragment>
        );
    }
}
 