/**
 *
 * Asynchronously loads the component for Hobbies
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
