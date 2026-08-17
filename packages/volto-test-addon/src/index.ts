import type { ConfigType } from '@plone/registry';
import installSettings from './config/settings';

function applyConfig(config: ConfigType) {
  // test
  installSettings(config);

  return config;
}

export default applyConfig;
