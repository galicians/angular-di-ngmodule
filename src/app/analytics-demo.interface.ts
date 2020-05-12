export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}

export interface Metric {
  eventName: string;
  scope: string;
}
let metric: Metric = {
  eventName: "loggedIn",
  scope: "pablo"
}