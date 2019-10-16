import React from 'react';
import TalkEditorProps from '../@prop-types/talk-editor.props';
import Button from '../button/button.component';
import { FaPaperPlane } from 'react-icons/fa';


export interface TalkEditorState {
    message: string
}

/**
 * Component used to display the input sending messages
 */
class TalkEditor extends React.Component<TalkEditorProps, TalkEditorState>{

    public state: TalkEditorState = {
        message: ''
    }

    /**
     * Send message
     */
    sendMessage = (): void => {
        console.log('send message', this.state.message);
    }

    /**
     * On input change store message on state
     */
    handleChange = (event: any): void => {
        this.setState({ message: event.target.value });
    }

    render(): React.ReactElement {
        return (
        <div className="container">
            <div className="form-group row">
                <div className="mr-2 col">
                    <input
                        value = { this.state.message }
                        onChange = { this.handleChange }
                        className="form-control" 
                        type="text"/>
                </div>
                <Button
                    cssClassNames= { ['col-2'] }
                    icon = { <FaPaperPlane/> } 
                    action = { () => this.sendMessage() }>
                    <span>Send</span>
                </Button>
            </div>
        </div>)
    }
}

// TalkEditor.defaultProps = {
  
// };

export default TalkEditor;