import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyPaginatorIntl as MatPaginatorIntl } from '@angular/material/legacy-paginator';
import { PaginatorI18n } from './utils/adapters/paginator.adapter';
import { SnackBackAdapter } from "./utils/adapters/snackBar.adapter";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SnackBackAdapter,
    { provide: MatPaginatorIntl, useValue: new PaginatorI18n().getPaginatorIntl() }
  ],
})
export class SharedModule { }
