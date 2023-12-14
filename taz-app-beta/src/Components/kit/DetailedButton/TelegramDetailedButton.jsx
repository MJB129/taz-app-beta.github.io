import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramDetailedButton.css';
import TelegramText from "../Text/TelegramText";

const TelegramDetailedButton = (props) => {
    return (
        <div {...props} className={'telegramDetailedButton ' + props.className}>
            <TelegramText className={'telegramSubtitle'}>{props.buttontitle}</TelegramText>
            <TelegramText className={'telegramHint'}>{props.buttondescription}</TelegramText>
            <TelegramButton onClick={props.onButtomClick}>{props.buttonlabel}</TelegramButton>
        </div>
    );
};

export default TelegramDetailedButton;

