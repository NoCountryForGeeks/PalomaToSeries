import React, { Component } from 'react';

import { CustomFragment } from 'globalSharedComponents';

class SeassonSF extends Component {   
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toogle() {
        this.setState({ ...this.state, isOpen: !this.state.isOpen });
    }

    render() {   
        const props = { 
            toogle: this.toogle.bind(this),
            state: this.state,
            props: this.props
        }
        
        return (
            <CustomFragment>
                { this.props.render(props) }
            </CustomFragment>
        )
    }
}

export default SeassonSF;