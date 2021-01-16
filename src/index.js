import DSInput from './components/DesignSystem/Input';
import DSTextArea from './components/DesignSystem/TextArea';
import Input from './components/Input/Input';

import './styles/quanta.scss';

export default (config) => {
  config.addonRoutes = [
    ...config.addonRoutes,
    {
      path: '/designsystem/input',
      component: DSInput,
    },
    {
      path: '/designsystem/textarea',
      component: DSTextArea,
    },
  ];

  config.widgets.default = Input;

  return {
    ...config,
  };
};
