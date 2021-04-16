module.exports = {
  testConcurrency: 50,
  showLogs: true,
  appName: "LoadTest25",
  batchName: "LoadTest25",
  storybookUrl: "http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'}
  ],
  serverUrl: 'https://test2eyes.applitools.com',
};
