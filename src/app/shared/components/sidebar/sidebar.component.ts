import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private _gifsService = inject(GifsService);

  public get tagsHistory(): string[] {
    return this._gifsService.tagsHistory;
  }

  public researchTag(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
