/**
 * Reference: https://www.youtube.com/watch?v=wtq-el8d5bI&ab_channel=AyyazTech
 */
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

library.add(faMoon);
library.add(faSun);

export default function FontAwesomeConfig() {
  return null;
}
