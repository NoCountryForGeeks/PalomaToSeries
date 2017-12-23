import React, { Component/*, Fragment*/ } from 'react';
import { View } from 'react-native';

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
            <View>
                { this.props.render.bind(this)() }
            </View>
        )
    }
}

export default SeassonSF;