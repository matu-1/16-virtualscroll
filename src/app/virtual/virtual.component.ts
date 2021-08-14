import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;
  items = new Array(1000).fill(0);

  constructor() {}

  ngOnInit(): void {
  }

  irFinal(){
    this.virtualScroll.scrollToIndex(this.items.length - 1);
  } 

  irMitad(){
    this.virtualScroll.scrollToIndex(this.items.length/2);
  } 

  irInicio(){
    this.virtualScroll.scrollToIndex(0);
  } 

}
