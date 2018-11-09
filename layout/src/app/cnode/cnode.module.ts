import { CnodeService } from './cnode.service';
import { CnodeRoutingModule } from './cnode.routing';
import { CnodeComponent } from './cnode.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CnodeRoutingModule,
  ],
  declarations: [ CnodeComponent ],
  providers: [ CnodeService ]
})
export class CnodeModule { }
