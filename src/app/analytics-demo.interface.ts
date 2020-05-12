export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}

let metric: Metric = {
  eventName: "loggedIn",
  scope: "pablo"
}