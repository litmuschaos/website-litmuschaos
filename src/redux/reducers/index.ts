import { CommunityData } from "../../models/analytics";
import { combineReducers } from "redux";
import * as analyticsReducer from "./analytics";
import { History } from "history";

export interface RootState {
  communityData: CommunityData;
}

export default (
  history: History // eslint-disable-line @typescript-eslint/no-unused-vars
) =>
  combineReducers({
    ...analyticsReducer,
  });
