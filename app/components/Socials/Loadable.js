/**
 *
 * Asynchronously loads the component for Socials
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
