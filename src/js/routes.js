import AboutPage from '../pages/about.f7.html';

import home from './routes/home.js';
import login from './routes/login.js';
import forbidden from './routes/forbidden.js';
import not_found from './routes/not-found.js';

import Check from './controllers/check';

let routes = [
  {
    name: 'about',
    path: '/about/',
    component: AboutPage,
  },
  ...home,
  ...login,
  ...forbidden,
  ...not_found,
]

export default routes;