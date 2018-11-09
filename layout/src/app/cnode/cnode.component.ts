import { CnodeService } from './cnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnode',
  templateUrl: './cnode.component.html',
  styleUrls: ['./cnode.component.css']
})
export class CnodeComponent implements OnInit {

  constructor(private cnodeService: CnodeService) { }
  cnode: any;

  getCnode() {
    this.cnodeService.getCnode().subscribe((data) => {
      this.cnode = data;
      console.log(this.cnode);
    });
  }

  ngOnInit() {
    this.getCnode();
  }

}
