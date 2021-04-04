module.exports = {
  concurrency: 100,
  showLogs: true,
  appName: "LoadTest1",
  batchName: "LoadTest1",
  storybookUrl: "http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'},
    {width: 800, height: 600, name: 'firefox'},
    {width: 800, height: 600, name: 'safari'}
  ],
  serverUrl: 'https://testeyes.applitools.com',
};
