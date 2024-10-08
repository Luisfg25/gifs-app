import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apiKey: string = 'LH1NEZ5es16CIF3ZCY3r9f0g94Ri1Wnb';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private _tagsHistory: string[] = [];

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public gifsList: Gif[] = [];

  constructor(private _httpClient: HttpClient) {
    this._loadLocalStorage();
  }

  private _organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((value) => value !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this._saveLocalStorage();
  }

  private _saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private _loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) {
      return;
    }

    this._organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', 10)
      .set('q', tag);

    this._httpClient
      .get<SearchResponse>(`${this._serviceUrl}/search`, { params })
      .subscribe((resp) => (this.gifsList = resp.data));
  }
}
