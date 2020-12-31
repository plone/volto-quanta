import DesignSystem from './components/DesignSystem/DesignSystem';
import Input from './components/Input/Input';

import './styles/quanta.scss';

export default (config) => {
  config.addonRoutes.push({
    path: '/designsystem',
    component: DesignSystem,
    exact: true,
  });

  config.widgets.default = Input;

  return {
    ...config,
  };
};
