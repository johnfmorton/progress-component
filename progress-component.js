var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
let ProgressComponent = class ProgressComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.progress = 0;
        this.size = 100;
        this.strokeWidth = 0;
        this.message = 'Idle status';
        this.success = false;
        this.count = 0;
        this.isExpanded = false;
        this.messageHistory = [];
    }
    // Calculate the strokeWidth, defaulting to 1/2 of the size if not provided
    get calculatedStrokeWidth() {
        const defaultStrokeWidth = this.size / 2;
        return this.strokeWidth > 0
            ? Math.min(this.strokeWidth, defaultStrokeWidth)
            : defaultStrokeWidth;
    }
    updated(changedProperties) {
        if (changedProperties.has('message')) {
            this.updateMessageHistory();
        }
    }
    // Method to update the message history
    updateMessageHistory() {
        // Add new message to the history
        if (this.message) {
            this.messageHistory = [
                ...this.messageHistory.slice(-24), // Keep only the last 24 messages
                this.message,
            ];
        }
    }
    // Toggle between expanded and collapsed states
    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
    render() {
        const radius = (this.size / 2) - (this.calculatedStrokeWidth / 2);
        const circumference = 2 * Math.PI * radius;
        const progress = this.displayProgress(this.progress);
        const offset = circumference * (1 - progress);
        return html `
    <div class="first-row">
      <div role="progressbar" aria-valuenow="${this.progress * 100}" aria-valuemin="0" aria-valuemax="100" aria-label="Progress indicator">
        <svg
          width="${this.size}px"
          height="${this.size}px"
          viewBox="0 0 ${this.size} ${this.size}"
        >
          <circle
            cx="${this.size / 2}"
            cy="${this.size / 2}"
            r="${radius}"
            stroke="var(--progress-component-bg-color, #b9b9b9)" /* Default background color */
            stroke-width="${this.calculatedStrokeWidth}"
            fill="transparent"
          ></circle>
          <circle
            cx="${this.size / 2}"
            cy="${this.size / 2}"
            r="${radius}"
            stroke="var(--progress-component-fg-color, #3f3f3f)" /* Default foreground color */
            stroke-width="${this.calculatedStrokeWidth}"
            fill="transparent"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${offset}"
          ></circle>
        </svg>
      </div>
      <div
        class="message"
        tabindex="0"
        role="button"
        @click="${this.toggleExpand}"
        @keydown="${this.handleKeydown}"
        aria-expanded="${this.isExpanded}"
        aria-label="Toggle message history"
      >
        ${this.message}
      </div>
    </div>
    <div class="history ${this.isExpanded ? 'expanded' : ''}">
      <div class='intro'>Message history:</div>
      ${this.messageHistory.map((msg) => html `<div>${msg}</div>`)}
    </div>
    `;
    }
    displayProgress(progress) {
        return Math.min(Math.max(progress, 0), 1);
    }
    // Handle keyboard interaction for message expansion (Enter or Space)
    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.toggleExpand();
        }
    }
};
ProgressComponent.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      border-radius: var(--progress-component-border-radius, 4px); /* Default border-radius */
      border: solid 1px rgb(204, 204, 204); /* Default border color */
      border-style: var(--progress-component-border-style, solid); /* Default border style */
      padding: 8px 10px;
      max-width: var(--progress-component-max-width, 100%); /* Default max-width */
      overflow: hidden;
      font-size: var(--progress-component-font-size, 14px); /* Default font-size */
      color: var(--progress-component-color, rgb(89, 102, 115)); /* Default color */
    }
    .first-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
    circle {
      transition: stroke-dashoffset 0.35s;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
    .message {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
    }
    .history {
      display: flex;
      flex-direction: column;
      gap: 5px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      white-space: normal;
      font-size: 0.875em;
    }
    .history div.intro {
      font-style: italic;
      margin: 5px 0 0 0;
    }
    .history.expanded {
      max-height: 500px; /* Limit expansion height, you can adjust this */
    }
    .message:focus {
      outline: 2px solid blue;
    }
  `;
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "progress", void 0);
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "size", void 0);
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "strokeWidth", void 0);
__decorate([
    property({ type: String })
], ProgressComponent.prototype, "message", void 0);
__decorate([
    property({ type: Boolean })
], ProgressComponent.prototype, "success", void 0);
__decorate([
    property({ type: Number })
], ProgressComponent.prototype, "count", void 0);
__decorate([
    state()
], ProgressComponent.prototype, "isExpanded", void 0);
__decorate([
    state()
], ProgressComponent.prototype, "messageHistory", void 0);
ProgressComponent = __decorate([
    customElement('progress-component')
], ProgressComponent);
export { ProgressComponent };
//# sourceMappingURL=progress-component.js.map