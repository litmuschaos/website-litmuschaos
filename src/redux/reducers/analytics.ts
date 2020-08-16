import {
  AnalyticsAction,
  AnalyticsActions,
  CommunityData,
} from "../../models/analytics";
import createReducer from "./createReducer";

const initialState: CommunityData = {
  google: {
    totalRuns: "",
    operatorInstalls: "",
  },
};

export const communityData = createReducer<CommunityData>(initialState, {
  [AnalyticsActions.LOAD_COMMUNITY_ANALYTICS](
    state: CommunityData,
    action: AnalyticsAction
  ) {
    const data = action.payload;
    return {
      ...state,
      google: {
        totalRuns: data.google.totalRuns,
        operatorInstalls: data.google.operatorInstalls,
      },
    };
  },
});

export default communityData;
