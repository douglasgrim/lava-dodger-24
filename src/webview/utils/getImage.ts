import { ImageType } from '../../app/types';

import hero from '../../assets/images/hero-small.png';
import lava from '../../assets/images/lava.jpg';
import loadingIcon from '../../assets/images/loadingIcon-small.png';
import mud from '../../assets/images/mud.jpg';
import normal from '../../assets/images/normal.jpg';
import speeder from '../../assets/images/speeder.jpg';
import welcomeImage from '../../assets/images/welcomeImage-med.jpg';
import goal from '../../assets/images/goal.jpg';
import homeSweetHome from '../../assets/images/homeSweetHome.jpg';
import gameOver from '../../assets/images/gameOver.jpg';


const imageMap = new Map<ImageType, string>();
imageMap.set('hero', hero);
imageMap.set('lava', lava);
imageMap.set('loadingIcon', loadingIcon);
imageMap.set('mud', mud);
imageMap.set('blank', normal);
imageMap.set('speeder', speeder);
imageMap.set('welcomeImage', welcomeImage);
imageMap.set('goal', goal);
imageMap.set('homeSweetHome', homeSweetHome);
imageMap.set('gameOver', gameOver);

const getImage = (imageName: ImageType) => imageMap.get(imageName) || '';

export { getImage };