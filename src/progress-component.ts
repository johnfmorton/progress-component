import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('progress-component')
export class ProgressComponent extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      border: solid 1px gray;
      padding: 8px 10px;
      max-width: 800px;
      overflow: hidden;
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
    }
    .history {
      display: flex;
      flex-direction: column;

      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      white-space: normal;
      font-size: 0.8em;
    }
    .history div {
      margin: 5px 0;
    }
    .history.expanded {
      max-height: 500px; /* Limit expansion height, you can adjust this */
    }
  `;

  @property({ type: Number })
  progress = 0;

  @property({ type: Number })
  size = 100;

  @property({ type: Number })
  strokeWidth = 0;

  @property({ type: String })
  message = 'Idle status';

  @property({ type: Boolean })
  success = false;

  @property({ type: Number })
  count = 0;

  @state()
  private isExpanded = false;

  @state()
  private messageHistory: string[] = [];

  // Calculate the strokeWidth, defaulting to 1/3 of the size if not provided
  get calculatedStrokeWidth() {
    const defaultStrokeWidth = this.size / 3;
    return this.strokeWidth > 0
      ? Math.min(this.strokeWidth, defaultStrokeWidth)
      : defaultStrokeWidth;
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('message')) {
      this.updateMessageHistory();
    }
  }

  // Method to update the message history
  private updateMessageHistory() {
    // Add new message to the history
    if (this.message) {
      this.messageHistory = [
        ...this.messageHistory.slice(-24), // Keep only the last 24 messages
        this.message,
      ];
    }
  }

  // Toggle between expanded and collapsed states
  private toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  override render() {
    const radius = (this.size / 2) - (this.calculatedStrokeWidth / 2);
    const circumference = 2 * Math.PI * radius;
    const progress = this.displayProgress(this.progress);
    const offset = circumference * (1 - progress);

    return html`
    <div class="first-row">
      <div>
        <svg
          width="${this.size}px"
          height="${this.size}px"
          viewBox="0 0 ${this.size} ${this.size}"
        >
          <circle
            cx="${this.size / 2}"
            cy="${this.size / 2}"
            r="${radius}"
            stroke="#b9b9b9"
            stroke-width="${this.calculatedStrokeWidth}"
            fill="transparent"
          ></circle>
          <circle
            cx="${this.size / 2}"
            cy="${this.size / 2}"
            r="${radius}"
            stroke="#3f3f3f"
            stroke-width="${this.calculatedStrokeWidth}"
            fill="transparent"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${offset}"
          ></circle>
        </svg>
      </div>
      <div class="message" @click="${this.toggleExpand}">
        ${this.message}
      </div>
</div>
      <div class="history ${this.isExpanded ? 'expanded' : ''}">
        ${this.messageHistory.map(
          (msg) => html`<div>${msg}</div>`
        )}
      </div>
    `;
  }

  private displayProgress(progress: number): number {
    return Math.min(Math.max(progress, 0), 1);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'progress-component': ProgressComponent;
  }
}
