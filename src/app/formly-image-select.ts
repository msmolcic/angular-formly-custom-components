import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-image-select',
  template: `
    <ng-select
      [items]="to.items"
      bindLabel="{{ to.bindLabel }}"
      bindValue="{{ to.bindValue }}"
      (change)="to.change($event)"
    >
      <ng-template ng-label-tmp let-item="item">
        <img
          height="20"
          width="20"
          [src]="resolveItemProperty(item, to.image)"
        />
        <b>{{ resolveItemProperty(item, to.label) }}</b>
      </ng-template>
      <ng-template ng-option-tmp let-item="item" let-index="index">
        <img
          height="20"
          width="20"
          [src]="resolveItemProperty(item, to.image)"
        />
        <b>{{ resolveItemProperty(item, to.label) }}</b>
      </ng-template>
    </ng-select>
  `
})
export class FormlyImageSelect extends FieldType {
  resolveItemProperty(item: any, property: string): string {
    return item[property];
  }
}
