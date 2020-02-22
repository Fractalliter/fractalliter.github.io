/**
 *
 * Asynchronously loads the component for Communication
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
