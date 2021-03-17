import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appConversation]',
})
export class ConversationDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
