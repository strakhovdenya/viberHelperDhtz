import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmationDialogComponent} from './confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) {
  }

  public async confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = await this.modalService.open(ConfirmationDialogComponent, {size: dialogSize});
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    let result;
    try {
       result = await modalRef.result;
    } catch (e) {
      result = false;
    }

    return result;
  }

}
