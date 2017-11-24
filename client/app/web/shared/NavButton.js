import React from 'react';
import { withRouter } from 'react-router-dom';

import commonStyles from '../content/common.scss';

const NavButton = withRouter(({ history, target, content }) => (
    <button className={ commonStyles.navButton } type='button'
            onClick={() => history.push(`/${target}`) } >
        { content }
    </button>
));

export { NavButton }
