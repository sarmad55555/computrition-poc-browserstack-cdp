# Computrition BrowserStack POC

This project is a focused Playwright test suite built to validate key UI elements of Computrition’s homepage. It’s integrated with BrowserStack for cross-browser testing and designed to run cleanly in CI/CD pipelines.

Right now, we’re keeping it lean — just two reliable tests that do exactly what they need to:

- Make sure the homepage loads and the footer is visible
- Confirm that footer links are present and working

No flaky selectors. No strict mode drama. Just clean, stable automation.

---

## Tech Stack

- **Playwright** for browser automation
- **BrowserStack** for cloud-based device and browser coverage
- **TypeScript** for clean, typed test logic
- **Artifacts**: screenshots, trace files, video recordings, and HTML reports

---

## How to Run

To run the full suite:

```bash
npx playwright test --config=browserstack.config.ts

---

## What You Get
After each run, Playwright gives you:

A full-page screenshot of the homepage
A trace file you can open with npx playwright show-trace
A video recording of the test run
An HTML report with pass/fail status

## Known Issues and Limitations

This POC was built and tested under a trial version of BrowserStack, which comes with a few constraints:

Limited parallel sessions and device concurrency
Occasional delays in test execution due to queueing
Restricted access to advanced debugging features (e.g., extended logs, network capture)

We also explored Chrome DevTools Protocol (CDP) routing for enhanced device emulation and traceability. While CDP works well locally, it’s blocked or partially unsupported in BrowserStack’s grid environment. All known routing paths were tested, including:

connectOverCDP() for remote debugging
launchServer() with custom port forwarding
chromium.connect() with persistent context

None of these approaches yielded stable results in the trial environment, so CDP-based flows are excluded from this POC.

If full CDP support or advanced debugging is required, we recommend upgrading the BrowserStack plan or switching to a local grid setup for those flows.
