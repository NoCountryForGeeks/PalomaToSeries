import React, { Component, Fragment } from 'react';

class SeassonSF extends Component {   
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toogle() {
        this.setState({ ...this.state, isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Fragment>
                { this.props.render.bind(this)() }
            </Fragment>
        )
    }
}

export default SeassonSF;