import {Injectable} from '@angular/core';
import {MatLegacySnackBar as MatSnackBar} from '@angular/material/legacy-snack-bar';

@Injectable()
export class SnackBackAdapter {
    constructor(private snackBar: MatSnackBar) {
    }

    open(message: string, type: string) {
        return this.snackBar.open(message, undefined, {
            duration: 4000,
            panelClass: [type],
            horizontalPosition: 'end',
            verticalPosition: 'top'
        })
    }
}

export enum TypeAlert {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error'
}
