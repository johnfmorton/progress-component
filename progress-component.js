/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let ProgressComponent = class ProgressComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.progress = 0;
        // Size of the SVG in pixels
        this.size = 100;
        this.message = 'Idle status';
        this.success = false;
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        // Calculate radius based on the size, with padding for stroke width
        const radius = (this.size / 2) - 4; // Subtract stroke width from size to fit within SVG
        const circumference = 2 * Math.PI * radius;
        const progress = this.displayProgress(this.progress);
        const offset = circumference * (1 - progress);
        return html `
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
    displaySuccess(success) {
        let display = '';
        if (success === true) {
            // this.success = true;
            display = 'Success';
        }
        else {
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
    displayProgress(progress) {
        // Ensure the progress is between 0 and 1
        return Math.min(Math.max(progress, 0), 1);
    }
};
ProgressComponent.styles = css `
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
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "progress", void 0);
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "size", void 0);
__decorate([
    property({ type: String })
], ProgressComponent.prototype, "message", void 0);
__decorate([
    property({ type: Boolean })
], ProgressComponent.prototype, "success", void 0);
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "count", void 0);
ProgressComponent = __decorate([
    customElement('progress-component')
], ProgressComponent);
export { ProgressComponent };
//# sourceMappingURL=progress-component.js.map