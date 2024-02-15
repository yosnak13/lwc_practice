import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
  messageToChild = 'Hello from parent';

  handleClick() {
    this.template.querySelector('c-child-component').receiveMessage(this.messageToChild);
  }
}
