import React, { Component } from 'react';
import CustomFragment from 'customFragment';

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
            <CustomFragment>
                { this.props.render.bind(this)() }
            </CustomFragment>
        )
    }
}

export default SeassonSF;