import { JsonPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.scss',
})
export class GifsListComponent {
  private _gifsService = inject(GifsService);
  public tagHistory = this._gifsService.tagsHistory;

  @Input() public gifsList!: Gif[];
}
