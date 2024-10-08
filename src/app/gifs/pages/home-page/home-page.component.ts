import { Component, inject } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsSearchBoxComponent } from '../../components/gifs-search-box/gifs-search-box.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [GifsSearchBoxComponent, GifsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private _gifsService = inject(GifsService);

  public get gifsList() {
    return this._gifsService.gifsList;
  }
}
