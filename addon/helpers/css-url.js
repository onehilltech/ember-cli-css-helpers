import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export default helper(function cssUrl(params) {
  const [url] = params;
  return isPresent (url) ? `url("${url}")` : null;
});
