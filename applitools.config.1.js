module.exports = {
  concurrency: 40,
  showLogs: true,
  appName: "LoadTest1",
  batchName: "LoadTest1",
  storybookUrl: "https://jira-storybook.staging.atl-paas.net/?path=/story/*",
  readStoriesTimeout: 300000,
  waitBeforeScreenshots: 200,
  browser: [
    {width: 800, height: 600, name: 'chrome'}
  ],
  serverUrl: 'https://testeyes.applitools.com',
};
