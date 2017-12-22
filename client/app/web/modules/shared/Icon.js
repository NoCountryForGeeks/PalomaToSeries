import React from 'react';

const Icon = ({ svgIcon, className }) =>
    <svg viewBox={ svgIcon.viewBox } className={ className } role='img'>
        <use role='presentation' xlinkHref={ svgIcon.url } />
    </svg>

export default Icon;