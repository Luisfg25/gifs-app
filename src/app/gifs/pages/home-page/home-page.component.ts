import { Component } from '@angular/core';
import { GifsSearchBoxComponent } from '../../components/gifs-search-box/gifs-search-box.component';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [GifsSearchBoxComponent, GifsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
