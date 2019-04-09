/// <reference types="vss-web-extension-sdk" />

import { IWorkItemLoadedArgs, IWorkItemFieldChangedArgs } from "TFS/WorkItemTracking/ExtensionContracts";
import { TextFieldMultiline } from "./TextFieldMultiline";

const provider = () => {
    let control: TextFieldMultiline;

    const ensureControl = () => {
        if (!control) {
            control = new TextFieldMultiline();
        }
        control.refresh();
    };

    return {
        onLoaded: (args: IWorkItemLoadedArgs) => {
            ensureControl();
        },
        onFieldChanged: (args: IWorkItemFieldChangedArgs) => {
            var changedValue = args.changedFields[VSS.getConfiguration().witInputs["FieldName"]];
            if (control && changedValue !== undefined && changedValue !== null) {
                control.refresh();
            }
        },
    };
};

VSS.register(VSS.getContribution().id, provider);
