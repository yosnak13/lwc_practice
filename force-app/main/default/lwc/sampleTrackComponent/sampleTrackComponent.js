// trackExample.js
import { LightningElement, track } from 'lwc';

export default class TrackExample extends LightningElement {
  @track count = 0;

  incrementCount() {
    this.count++;
  }
}
