import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as ApiCalls from "api/ApiCalls";
import ErrorMessage from "config/ErrorMessage";

const Initial = createContext();
Initial.displayName = "InitialContext";

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return { ...state, ...action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function InitialProvider({ children }) {
  const initialState = {
    company: {
      id: "",
      name: "",
      logo_url: "",
    },
    person: {
      id: "",
      name: "",
      thumbnail_url: "",
      position: "",
    },
  };
  const [initialController, initialDispatch] = useReducer(reducer, initialState);
  return (
    <Initial.Provider value={[initialController, initialDispatch]}>{children}</Initial.Provider>
  );
}

function useInitialController() {
  const context = useContext(Initial);
  if (!context) {
    throw new Error(ErrorMessage.CONTEXT_INITIAL_ERROR);
  }
  return context;
}

InitialProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const init = (dispatch) => {
  const selfCompany = ApiCalls.company.getSelfBasic();
  const selfEmployee = ApiCalls.person.getSelfBasic();
  const value = {
    company: selfCompany,
    person: selfEmployee,
  };
  return dispatch({ type: "INIT", value });
};

export { InitialProvider, useInitialController, init };
