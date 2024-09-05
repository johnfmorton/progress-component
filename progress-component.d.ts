import { LitElement } from 'lit';
export declare class ProgressComponent extends LitElement {
    static styles: import("lit").CSSResult;
    progress: number;
    size: number;
    strokeWidth: number;
    message: string;
    success: boolean;
    count: number;
    private isExpanded;
    private messageHistory;
    get calculatedStrokeWidth(): number;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private updateMessageHistory;
    private toggleExpand;
    render(): import("lit-html").TemplateResult<1>;
    private displayProgress;
}
declare global {
    interface HTMLElementTagNameMap {
        'progress-component': ProgressComponent;
    }
}
//# sourceMappingURL=progress-component.d.ts.map