import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.scss'
})
export class GifsListComponent {
  private _gifsService = inject(GifsService)
  public tagHistory  = this._gifsService.tagsHistory

}
