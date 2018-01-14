import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Link extends Component {
    render() {
        const { to, navigate, style } = this.props;
        return(
            <TouchableWithoutFeedback 
                style={ style }
                onPress={() => { navigate(to) }}
            >
                { this.props.children }
            </TouchableWithoutFeedback>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    navigate: to => dispatch(NavigationActions.navigate(to))
});

export default connect(null, mapDispatchToProps)(Link);