import { Component, inject } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _gifsService = inject(GifsService)
  public  get tagsHistory() {
    return this._gifsService.tagsHistory}
}
