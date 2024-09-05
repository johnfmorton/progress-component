import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('progress-component')
export class ProgressComponent extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: solid 1px gray;
      padding: 8px 10px;
      max-width: 800px;
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
      max-width: calc(100% - 20px); /* Adjusts the width dynamically */
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

  // Calculate the strokeWidth, defaulting to 1/2 of the size if not provided
  get calculatedStrokeWidth() {
    const defaultStrokeWidth = this.size / 2; // Changed to 1/2 of the size
    return this.strokeWidth > 0
      ? Math.min(this.strokeWidth, defaultStrokeWidth)
      : defaultStrokeWidth;
  }

  override render() {
    const radius = (this.size / 2) - (this.calculatedStrokeWidth / 2); // Account for stroke width in the radius calculation
    const circumference = 2 * Math.PI * radius;
    const progress = this.displayProgress(this.progress);
    const offset = circumference * (1 - progress);

    return html`
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
      <div class='message'>${this.message}</div>
    `;
  }

  displaySuccess(success: boolean) {
    return success ? 'Success' : 'Failure';
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
