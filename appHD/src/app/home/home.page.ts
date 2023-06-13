import { Component, OnInit } from '@angular/core';

import { EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {


  hasAccount = false;
  currentImage?: null | string;
  imageData?: null | string;

  constructor(private emailComposer: EmailComposer) {}

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    this.imageData = image.base64String;
    this.currentImage = `data:image/jpeg;base64,${image.base64String}`;
  }

  async openEmail() {
    const email: EmailComposerOptions = {
      to: ' ',
      cc: ' ',
      attachments: [`base64:image.jpg//${this.imageData}`],
      subject: ' Esto es un ticket ',
      body: ' Hola!... esto es una prueba. ',
    };

    await this.emailComposer.open(email);
  }

}
