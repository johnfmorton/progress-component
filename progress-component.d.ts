/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class ProgressComponent extends LitElement {
    static styles: import("lit").CSSResult;
    progress: number;
    size: number;
    message: string;
    success: boolean;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Displays success or failure
     * @param success The status of the operation
     * @returns Success or Failure
     */
    displaySuccess(success: boolean): string;
    /**
     * Displays the progress
     * @param progressValue The progress of the operation
     * @returns The progress
     */
    private displayProgress;
}
declare global {
    interface HTMLElementTagNameMap {
        'progress-component': ProgressComponent;
    }
}
//# sourceMappingURL=progress-component.d.ts.map