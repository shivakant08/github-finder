import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Search Users//

  //Get Single User//

  //Get user Repository//

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
