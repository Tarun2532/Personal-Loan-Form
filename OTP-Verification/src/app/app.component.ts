import { Component,ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'OTP Verification';
  otp: string;

  setOtp(otp: string) {
    this.otp = otp;
  }
}


