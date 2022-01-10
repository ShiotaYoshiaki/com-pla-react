import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as ApiCalls from "api/ApiCalls";
import ErrorMessage from "config/ErrorMessage";

const SelfProfile = createContext();
SelfProfile.displayName = "SelfProfileContext";

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

function SelfProfileProvider({ children }) {
  const initialState = {
    id: "",
    name: {
      basic: "",
      japanese: {
        family: "",
        first: "",
      },
      kanji: {
        family: "",
        first: "",
      },
      english: {
        family: "",
        first: "",
      },
    },
    thumbnail: {
      url: "",
    },
    lang: "",
    email: "",
    phone: {
      private: "",
      self_company: "",
      client_company: "",
    },
    sns: {
      twitter: "",
      instagram: "",
      facebook: "",
    },
    introduce: {
      self: "",
      others: [""],
    },
    organization: {
      position: "",
      list: [],
    },
    projects: [],
    conversations: [],
  };
  const [selfProfileController, selfProfileDispatch] = useReducer(reducer, initialState);
  return (
    <SelfProfile.Provider value={[selfProfileController, selfProfileDispatch]}>
      {children}
    </SelfProfile.Provider>
  );
}

function useSelfProfileController() {
  const context = useContext(SelfProfile);
  if (!context) {
    throw new Error(ErrorMessage.CONTEXT_INITIAL_ERROR);
  }
  return context;
}

SelfProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const setSelfProfile = (dispatch) => {
  const value = ApiCalls.person.getSelfProfile();
  return dispatch({ type: "INIT", value });
};

export { SelfProfileProvider, useSelfProfileController, setSelfProfile };
