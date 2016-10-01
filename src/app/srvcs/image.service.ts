import { Injectable } from '@angular/core';
import axios from 'axios';

// Custom Declarations
declare const $: any;
declare const Materialize: any;

@Injectable()
export class ImageService {
  // Public properties

  // Private properties
  private url: string;

  constructor() {
    this.url = 'https://api.cloudinary.com/v1_1/myoutdooradventures/image/upload';
  }

  public uploadImage(file: File): any {
    const form = new FormData();

    form.append('file', file);
    form.append('upload_preset', 'default_preset');

    return axios.post(this.url, form)
      .then((cloudinaryRes) => {
          return cloudinaryRes.data;
        });
  }
}
