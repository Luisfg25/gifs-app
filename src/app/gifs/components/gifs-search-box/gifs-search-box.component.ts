import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  templateUrl: './gifs-search-box.component.html',
  styleUrl: './gifs-search-box.component.scss'
})
export class GifsSearchBoxComponent {

  private _gifsService = inject(GifsService)

  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>

  public searchTag() {
    this._gifsService.searchTag(this.tagInput.nativeElement.value)
    this.tagInput.nativeElement.value= ''
    console.log(this._gifsService.tagsHistory)
  }
}
