import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss',
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt = '';

  public hasLoaded = false;

  ngOnInit() {
    if (!this.url) throw new Error('URL us requried');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
