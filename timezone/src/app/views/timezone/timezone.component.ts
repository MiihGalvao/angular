import { Component, OnInit } from '@angular/core';
import { Timezone } from 'src/app/model/timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
obterTimezone() {
throw new Error('Method not implemented.');
}
timezone: any;

  constructor() { }

  ngOnInit(): void {
  }

  consultarHora() {
    this.timezone.obterEndereco(this.timezone).subscribe(() => {
      this.timezone = this.timezone;
    });

    alert('A API foi chamada');
  }

}
