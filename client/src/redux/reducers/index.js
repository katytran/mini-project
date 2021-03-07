import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducer";

export default combineReducers({
  post: postReducer,
  auth: authReducer,
  alert: alertReducer,
  user: userReducer,
  route: routeReducer,
});
