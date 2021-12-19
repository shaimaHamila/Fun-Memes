import { MemesService } from './../../services/memes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-memes-list',
  templateUrl: './memes-list.component.html',
  styleUrls: ['./memes-list.component.scss']
})
export class MemesListComponent implements OnInit {

  public memes$: Observable<any> | undefined;

  constructor(private memesService: MemesService) { }

  ngOnInit(): void {
    this.memes$ = this.memesService.getMemes()
  }

}
