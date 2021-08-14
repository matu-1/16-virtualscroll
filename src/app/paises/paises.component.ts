import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Pais {
  name: string;
}

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent implements OnInit {
  paises?: Pais[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Pais[]>('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((res) => (this.paises = res));
  }

  onDropped(e: CdkDragDrop<any>) {
    console.log(e);
    moveItemInArray(this.paises!, e.previousIndex, e.currentIndex);
  }
}
