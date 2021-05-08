import React, {FC, Props} from 'react'
import css from './Dialogs.module.css'
import {Message} from "./MessageItem/MessageIte";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    AddMessageActionCreatorType,
    DialogsType,
    initialStateType,
    MessagesType,
    UpdateMessageActionCreatorType
} from "../../Redux/DialogReducer";

type PropsType = {
    dialogsPageData: (state: initialStateType, action: any) => initialStateType,
    dialogs: DialogsType,
    messages: MessagesType,
    updateMessageActionCreator: (text: string) => UpdateMessageActionCreatorType,
    addMessageActionCreator: (text: string) => AddMessageActionCreatorType,
    newTextMessage: string


}
export const Dialogs: FC<PropsType> = (props:any) => {

    const dialogElement = props.dialogsPageData.dialogs
        .map((d: DialogsType) => <DialogItem key={d.id} id={d.id} name={d.name} avatarURL={d.avatarURL}/>)
    const messageElement = props.dialogsPageData.messages
        .map((m: MessagesType) => <Message key={m.id} id={m.id} message={m.message}/>)

    const newMessageElement: any = React.createRef()
    const onMessageChange = () => {
        const text = newMessageElement.current.value
        props.updateMessageActionCreator(text)
    }
    const addMessage = () => {
        const text = newMessageElement.current.value
        props.addMessageActionCreator(text)
    }
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                {dialogElement}
            </div>
            <div className={css.messages}>
                {messageElement}
            </div>
            <div>
                        <textarea ref={newMessageElement}
                                  value={props.newTextMessage}
                                  placeholder={`input`}
                                  onChange={onMessageChange}
                                  cols={10} rows={3}/>
            </div>
            <div>
                <button onClick={addMessage}>new message</button>
            </div>
        </div>
    )
}