import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async showToast(message: string, duration = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      color: 'dark',
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    toast.present();
  }
}
