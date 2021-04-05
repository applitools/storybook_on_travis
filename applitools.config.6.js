module.exports = {
  concurrency: 20,
  showLogs: true,
  appName: "LoadTest6",
  batchName: "LoadTest6",
  storybookUrl: "http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'}
  ],
  serverUrl: 'https://testeyes.applitools.com',
};
