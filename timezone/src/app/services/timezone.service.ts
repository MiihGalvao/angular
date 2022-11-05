import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timezone } from '../model/timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private http: HttpClient) { }

  obterTimezone(timezone: string): Observable<Timezone> {
    return this.http.get<Timezone>(`https://worldtimeapi.org/api/timezone/America/Sao_Paulo`);
  }
}
