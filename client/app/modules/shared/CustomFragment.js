import React from 'react';

const CustomFragment = ({ children }) =>
    React.Children.only(children);

export default CustomFragment;