import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
// import * as ApiCalls from "api/ApiCalls";
import ErrorMessage from "config/ErrorMessage";

const ProfileOverview = createContext();
ProfileOverview.displayName = "ProfileOverviewContext";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_OVERVIEW_MENU": {
      return {
        ...state,
        overviewMenuValue: action.value,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProfileOverviewProvider({ children }) {
  const initState = {
    overviewMenuValue: 0,
  };
  const [profileOverviewController, profileOverviewDispatch] = useReducer(reducer, initState);
  return (
    <ProfileOverview.Provider value={[profileOverviewController, profileOverviewDispatch]}>
      {children}
    </ProfileOverview.Provider>
  );
}

function useProfileOverviewController() {
  const context = useContext(ProfileOverview);
  if (!context) {
    throw new Error(ErrorMessage.CONTEXT_PROFILE_OVERVIEW_ERROR);
  }
  return context;
}

function handleOverviewMenu(dispatch, value) {
  return dispatch({ type: "CHANGE_OVERVIEW_MENU", value });
}

ProfileOverviewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProfileOverviewProvider, useProfileOverviewController, handleOverviewMenu };
