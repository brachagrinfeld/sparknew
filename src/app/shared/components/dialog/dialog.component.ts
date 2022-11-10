import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectDialogCommonState } from 'app/app-state.index';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DialogModel } from './dialogModel';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit, OnDestroy {
  dialog: DialogModel = { title: '', content: null, style: null, visible: true };
  dialogChangedSub: Subscription
  constructor(private sanitizer: DomSanitizer, private store: Store<AppState>, private _cdr: ChangeDetectorRef) {
    this.dialogChangedSub = this.store.select(selectDialogCommonState).subscribe((res: DialogModel) => {
      this.dialog.visible = res.visible;
      this.dialog.content = this.sanitizer.bypassSecurityTrustHtml(res.content)
      this.dialog.style = res.style;
      this.dialog.title = res.title;
      this._cdr.markForCheck();
    })
  }
  ngOnDestroy() {
    this.dialogChangedSub.unsubscribe();
  }
  ngOnInit(): void {
  }

}
