// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://6ae1ce35dfb04863b321dced09a302fa@o386822.ingest.sentry.io/5221520",
  //   release: "my-project-name@2.3.12",
  //   environment: "development-test",
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log,
};
