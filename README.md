# Progress Component

This is a simple progress component built with [Lit](https://lit.dev/). It will show a progress indicator that shows the progress of a task, from 0 to 1, as a percentage. It also displays a message that describes the task.

In addition, it stores that last 25 messages that were displayed, and allows the user to view them by clicking on the message to expland the message history.

## Visual Test Page

An interactive test page is available for manually verifying the component works correctly. It covers property variations, CSS custom properties, edge cases, message history, animated progress, and accessibility.

**Live version:** [https://johnfmorton.github.io/progress-component/](https://johnfmorton.github.io/progress-component/)

**Run locally:**

```bash
npm install
npm run build
npx wds --watch
```

Then open [http://localhost:8000/test/visual/](http://localhost:8000/test/visual/) in your browser.

The test page source is at [`test/visual/index.html`](./test/visual/index.html).

## Documentation on the build process

See the original README [here](./README-original.md).
