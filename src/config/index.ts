export default {
  environment: process.env.NODE_ENV,
  analytics: {
    url:
      process.env.ANALYTICS_API || "https://hub.litmuschaos.io/api/community",
  },
};
