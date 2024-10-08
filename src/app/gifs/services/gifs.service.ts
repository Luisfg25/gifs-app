import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []

  public get tagsHistory(): string[] {
    return [...this._tagsHistory]
  }

  private _organizeHistory(tag: string) {
  
  tag = tag.toLocaleLowerCase()

  if(this._tagsHistory.includes(tag)){
    this._tagsHistory = this._tagsHistory.filter(value => value !== tag)
  }

  this._tagsHistory.unshift(tag)

  this._tagsHistory = this._tagsHistory.splice(0, 10)
  }

  public searchTag(tag: string): void {
    if(tag.length === 0) {
      return
    }

    this._organizeHistory(tag)
  }
}
