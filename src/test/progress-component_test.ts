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

  describe('ProgressComponent', () => {
    it('renders the component', async () => {
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
      <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="Progress indicator" aria-valuenow="0">
        <svg width="100px" height="100px" viewBox="0 0 100 100">
          <circle stroke="var(--bg-color, #b9b9b9)" *="" default="" background="" color="" fill="transparent" cx="50" cy="50" r="25" stroke-width="50"></circle>
          <circle stroke="var(--fg-color, #3f3f3f)" *="" default="" foreground="" color="" fill="transparent" cx="50" cy="50" r="25" stroke-width="50" stroke-dasharray="157.07963267948966" stroke-dashoffset="157.07963267948966"></circle>
        </svg>
      </div>
      <div class="message" tabindex="0" role="button" aria-label="Toggle message history" aria-expanded="false">
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
