/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ProgressComponent} from '../progress-component.js';

import {fixture, assert, expect} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('progress-component', () => {
  test('is defined', () => {
    const el = document.createElement('progress-component');
    assert.instanceOf(el, ProgressComponent);
  });

  suite('ProgressComponent', () => {
    test('renders the component', async () => {
      const el = await fixture(
        html`<progress-component></progress-component>`
      );
      expect(el).to.exist;
    });
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<progress-component></progress-component>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="first-row">
        <div class="left-side">
          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="Progress indicator" aria-valuenow="0">
          </div>
          <div class="message" tabindex="0" role="button" aria-label="Toggle message history" aria-expanded="false">
            Idle status
          </div>
        </div>
        <div class="arrow" role="button" tabindex="0" aria-label="Toggle message history">
        </div>
      </div>
      <div class="history">
        <div class="intro">
          Message history:
        </div>
        <div>
          Idle status
        </div>
      </div>
    `
    );
  });
});

// test('renders with a set name', async () => {
//   const el = await fixture(html`<progress-component name="Test"></progress-component>`);
//   assert.shadowDom.equal(
//     el,
//     `
//     <h1>Hello, Test!</h1>
//     <button part="button">Click Count: 0</button>
//     <slot></slot>
//   `
//   );
// });

// test('handles a click', async () => {
//   const el = (await fixture(html`<progress-component></progress-component>`)) as ProgressComponent;
//   const button = el.shadowRoot!.querySelector('button')!;
//   button.click();
//   await el.updateComplete;
//   assert.shadowDom.equal(
//     el,
//     `
//     <h1>Hello, World!</h1>
//     <button part="button">Click Count: 1</button>
//     <slot></slot>
//   `
//   );
// });

// test('styling applied', async () => {
//   const el = (await fixture(html`<progress-component></progress-component>`)) as ProgressComponent;
//   await el.updateComplete;
//   assert.equal(getComputedStyle(el).paddingTop, '16px');
// });
