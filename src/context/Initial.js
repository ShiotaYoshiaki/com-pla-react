import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as ApiCalls from "api/ApiCalls";
import ErrorMessage from "config/ErrorMessage";

const Initial = createContext();

// Setting custom name for the context which is visible on react dev tools
Initial.displayName = "InitialContext";

function reducer(state, action) {
  switch (action.type) {
    case "COMPANY": {
      return { ...state, company: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function InitialProvider({ children }) {
  const initialState = {
    company: {
      name: "",
      id: "",
      logo_url: "",
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

const setCompany = (dispatch) => {
  const basicCompany = ApiCalls.company.getBasic();
  const value = basicCompany;
  return dispatch({ type: "COMPANY", value });
};

export { InitialProvider, useInitialController, setCompany };
