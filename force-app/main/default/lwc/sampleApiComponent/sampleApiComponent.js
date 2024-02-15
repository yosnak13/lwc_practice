// sampleComponent.js
import { LightningElement, api } from 'lwc';

export default class SampleComponent extends LightningElement {
  @api message = 'Hello, World!';

  handleChangeMessage() {
    this.message = 'New Message!';
  }
}
