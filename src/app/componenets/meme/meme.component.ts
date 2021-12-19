import { Component, Input, OnInit } from '@angular/core';

export interface IMeme{
  id: string;
  name: String;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  @Input()
  meme!: IMeme;
  constructor() { }

  ngOnInit(): void {
  }

}
