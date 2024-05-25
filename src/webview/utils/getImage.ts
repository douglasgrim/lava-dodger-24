import hero from '../../assets/images/hero.png';
import lava from '../../assets/images/lava.png';
import loadingIcon from '../../assets/images/loadingIcon.png';
import mud from '../../assets/images/mud.png';
import normal from '../../assets/images/normal.png';
import speeder from '../../assets/images/speeder.png';
import welcomeImage from '../../assets/images/welcomeImage.png';
import goal from '../../assets/images/goal.png';

import { ImageType } from '../../app/types';

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