export enum AnalyticsActions {
  LOAD_COMMUNITY_ANALYTICS = "LOAD_COMMUNITY_ANALYTICS",
}

export interface Google {
  totalRuns: string;
  operatorInstalls: string;
}

export interface CommunityData {
  google: Google;
}

interface AnalyticsActionType<T, P> {
  type: T;
  payload: P;
}

export type AnalyticsAction = AnalyticsActionType<
  typeof AnalyticsActions.LOAD_COMMUNITY_ANALYTICS,
  CommunityData
>;
