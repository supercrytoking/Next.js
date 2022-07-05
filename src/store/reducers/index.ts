import { combineReducers, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { authReducer } from './authReducer';
import { directoryReducer } from './directoryReducer';
import { appsReducer } from './appsReducer';
import { authSamlReducer } from './authSamlReducer';
import { appNameReducer } from './appNameReducer';

const combinedReducers = combineReducers({
  auth: authReducer,
  directory: directoryReducer,
  apps: combineReducers({
    applications: appsReducer,
    applicationName: appNameReducer,
  }),
  saml: authSamlReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', state, action.payload);
      return action.payload;

    default: {
      return combinedReducers(state, action);
    }
  }
};

export default rootReducer;
