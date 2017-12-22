import Router from '../../routes';

const initialState = Router.router.getActionForPathAndParams('Master');

const navReducer = (state = initialState, action) => {
    const nextState = Router.router.getStateForAction(action, state);
    return nextState || state;
};

export default navReducer;