import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const KEY_SRORAGE = "videoplayer-current-time";

const player = new Player(iframe, {});


player.on('timeupdate', throttle(function (event) {
  localStorage.setItem(KEY_SRORAGE, JSON.stringify(event.seconds));
})), 1000;


const time = JSON.parse(localStorage.getItem(KEY_SRORAGE));

player.setCurrentTime(time);
