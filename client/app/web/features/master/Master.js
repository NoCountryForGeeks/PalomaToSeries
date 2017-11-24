import React, { Component } from 'react';
import { NavButton } from '../../shared'

import masterStyles from './master.scss';

class Master extends Component {
    render() {
        return (
            <div>
                <div className={ masterStyles.main }>Master page</div>
                <NavButton content='Go to Details!' target='detail'/>
            </div>
        );
    }
}

export { Master };
