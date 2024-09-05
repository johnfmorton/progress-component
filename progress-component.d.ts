import { LitElement } from 'lit';
export declare class ProgressComponent extends LitElement {
    static styles: import("lit").CSSResult;
    progress: number;
    size: number;
    strokeWidth: number;
    message: string;
    success: boolean;
    count: number;
    get calculatedStrokeWidth(): number;
    render(): import("lit-html").TemplateResult<1>;
    displaySuccess(success: boolean): "Success" | "Failure";
    private displayProgress;
}
declare global {
    interface HTMLElementTagNameMap {
        'progress-component': ProgressComponent;
    }
}
//# sourceMappingURL=progress-component.d.ts.map