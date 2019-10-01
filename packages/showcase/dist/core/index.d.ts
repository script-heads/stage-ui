import { IConfig } from '../../types';
declare class Core {
    static instance: Core;
    static getInstance(): Core;
    protected context: any;
    protected configObject: IConfig;
    protected generatedPluginsArray: any[];
    protected generatedCasesObject: any;
    protected userInterface: any;
    protected reactContext: any;
    constructor();
    readonly cases: any;
    readonly config: IConfig;
    readonly UI: any;
    readonly getReactContext: any;
    getId(prefix: string, id?: string): string;
    private initPlugin;
    init(UI: any): void;
    getCaseById(id: string | null, cases?: any): any;
}
declare const _default: Core;
export default _default;
