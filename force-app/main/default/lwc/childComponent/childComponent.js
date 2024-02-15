import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api receivedMessage;

    receiveMessage(message) {
        this.receivedMessage = message;
    }
}
