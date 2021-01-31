import { combineReducers } from "redux";
// import user from "../components/Login/Login.reducer";
// import recipes from "../components/Recipes/Recipes.reducer";
import globalReducers from "./shared/reducers";
import authentication from "../components/Auth/auth.reducers";

export default combineReducers({ globalReducers, authentication });
