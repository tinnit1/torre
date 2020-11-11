import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(icon: string): any {
    let url = 'assets/icons/';
    console.log(icon);
    switch (icon) {
      case 'linkedin':
        url += 'linkedIn.png';
        break;
      case 'twitter':
        url += 'twitter.png';
        break;
      case 'facebook':
        url += 'facebook.png';
        break;
      case 'github':
        url += 'github.png';
        break;
      case 'instagram':
        url += 'instagram.png';
        break;
      case 'gitlab':
        url += 'gitLab.png';
        break;
      default:
        console.log('type icon not exist');
        url += '/user/xxx';
    }
    return url;
  }

}
