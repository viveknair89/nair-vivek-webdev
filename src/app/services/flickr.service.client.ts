import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FlickrService {

  key = '166ee5cc0935a19d5493b3cc22f3acb9';
  secret = '4bc828d63669efa9';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}
