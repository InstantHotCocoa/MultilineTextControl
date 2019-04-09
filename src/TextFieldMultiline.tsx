import * as React from "react";
import * as ReactDOM from "react-dom";
//import { getClient } from "TFS/WorkItemTracking/RestClient";
import { WorkItemFormService } from "TFS/WorkItemTracking/Services";

import { TextFieldMultilineReturn } from "./TextFieldMultilineReturn";

export class TextFieldMultiline {
    public fieldName = VSS.getConfiguration().witInputs["FieldName"];
    
    public async refresh(value?: string): Promise<void> {
        if (!value) {
            value = await this._get();
        }

        ReactDOM.render(<TextFieldMultilineReturn
            value={value}
            multiline={true}
            placeholder="Input TextFieldMultiline."
            onTextChanged={this._set}
        />,
            document.getElementById("container")
        );
    }
    
    private async _get(): Promise<string> {
		const formService = await WorkItemFormService.getService();
        const valueString = await formService.getFieldValue(this.fieldName);
        if (typeof valueString !== "string") {
            return "";
        }
        return valueString;
    }
    private _set = async (values: string): Promise<void> => {
        this.refresh(values);
        const formService = await WorkItemFormService.getService();
        await formService.setFieldValue(this.fieldName, values);
    }
    
}
