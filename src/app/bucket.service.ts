import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://10.109.20.110';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  constructor(private http: HttpClient) { }

  getBuckets() {
    return this.http.get(BASE_URL + '/buckets');
  }

  getBucketByUri(uri: string) {
    return this.http.get(uri);
  }

  getBucketById(id: number) {
    return this.http.get(`${BASE_URL}/buckets/${id}`);
  }
}
