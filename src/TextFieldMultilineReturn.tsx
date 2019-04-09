import * as React from "react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';


interface TextFieldMultilineProps {
    value: string;
    multiline: boolean;
    placeholder: string;
    onTextChanged?: (value?: string) => Promise<void>;
}

interface TextFieldMultilineState {
    errorMessage: string;
}

export class TextFieldMultilineReturn extends React.Component<TextFieldMultilineProps, TextFieldMultilineState> {
    //public props: TextFieldMultilineProps = {value: "", multiline: true, placeholder: "Input TextFieldMultiline."};
    //public state: TextFieldMultilineState = {errorMessage: ""};


    public render(): JSX.Element {
        return <div className="multiline">
            <TextField 
                value={this.props.value}
                multiline={this.props.multiline}
                placeholder={this.props.placeholder}
                //onKeyDown={this._onInputKeyDown}
                //onBlur={this._onBlur}
                //onFocus={this._onFocus}
                onChange={this._onInputChange}
            />
        </div>;
    }
    
    private _onInputChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if (this.props.onTextChanged) {
            this.props.onTextChanged(newValue);
        }
    }
}
