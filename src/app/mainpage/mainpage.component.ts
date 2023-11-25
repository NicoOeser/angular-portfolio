import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit, OnDestroy {


  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}




    

}