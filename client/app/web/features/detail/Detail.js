import React, { Component } from 'react';
import { NavButton } from '../../shared'

import detailStyles from './detail.scss';

export default class Detail extends Component {
    render() {
        return (
            <div>
                <div className={ detailStyles.main }>Detail page</div>
                <NavButton content='Go to Master!' target='' />
            </div>
        );
  }
}
