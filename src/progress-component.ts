/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('progress-component')
export class ProgressComponent extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      gap: 10px;
    }
    circle {
      transition: stroke-dashoffset 0.35s;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
  `;

  @property({type: Number})
  progress = 0;

  // Size of the SVG in pixels
  @property({ type: Number })
  size = 100;

  @property({type: String})
  message = 'Idle status';

  @property({type: Boolean})
  success = false;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    // Calculate radius based on the size, with padding for stroke width
    const radius = (this.size / 2) - 4; // Subtract stroke width from size to fit within SVG
    const circumference = 2 * Math.PI * radius;
    const progress = this.displayProgress(this.progress);
    const offset = circumference * (1 - progress);

    return html`
      <div>
        <svg width="${this.size}px" height="${this.size}px">
          <circle
            cx="${this.size / 2}"
            cy="${this.size / 2}"
            r="${radius}"
            stroke="#b9b9b9"
            stroke-width="4"
            fill="transparent"
          ></circle>
          <circle
            cx="${this.size / 2}"
            cy="${this.size / 2}"
            r="${radius}"
            stroke="#3f3f3f"
            stroke-width="4"
            fill="transparent"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${offset}"
          ></circle>
        </svg>
      </div>
      <div>${this.message}</div>
    `;
  }

  /**
   * Displays success or failure
   * @param success The status of the operation
   * @returns Success or Failure
   */
  displaySuccess(success: boolean) {
    let display = '';
    if (success === true) {
      // this.success = true;
      display = 'Success';
    } else {
      // this.success = false;
      display = 'Failure';

    }
    return display;
  }

  /**
   * Displays the progress
   * @param progressValue The progress of the operation
   * @returns The progress
   */
  private displayProgress(progress: number): number {
    // Ensure the progress is between 0 and 1
    return Math.min(Math.max(progress, 0), 1);
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'progress-component': ProgressComponent;
  }
}
