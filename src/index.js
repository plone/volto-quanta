import DesignSystem from './components/DesignSystem/DesignSystem';

import './theme/main.less';

export default (config) => {
  config.addonRoutes.push({
    path: '/designsystem',
    component: DesignSystem,
    exact: true,
  });

  return {
    ...config,
  };
};
