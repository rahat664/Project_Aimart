import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';


@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, defaultImage: string = 'https://via.placeholder.com/300/400'): string {
    if (!value) {
      return defaultImage;
    }

    const files = value.split(',');
    return files ? `${environment.file_url}${files[0]}` : defaultImage;
  }
}

