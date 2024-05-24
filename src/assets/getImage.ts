import hero from './images/hero.png';
import lava from './images/lava.png';
import loadingIcon from './images/loadingIcon.png';
import mud from './images/mud.png';
import normal from './images/normal.png';
import speeder from './images/speeder.png';
import welcomeImage from './images/welcomeImage.png';
import goal from './images/goal.png';

import { ImageType } from '../app/types';

const imageMap = new Map<ImageType, string>();
imageMap.set('hero', hero);
imageMap.set('lava', lava);
imageMap.set('loadingIcon', loadingIcon);
imageMap.set('mud', mud);
imageMap.set('blank', normal);
imageMap.set('speeder', speeder);
imageMap.set('welcomeImage', welcomeImage);
imageMap.set('goal', goal);


const getImage = (imageName: ImageType) => imageMap.get(imageName) || '';

export { getImage };