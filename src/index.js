import DSInput from './components/DesignSystem/Input';
import DSTextArea from './components/DesignSystem/TextArea';
import DSSelect from './components/DesignSystem/Select';
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import SelectWidget from './components/Select/SelectWidget';

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
    {
      path: '/designsystem/select',
      component: DSSelect,
    },
  ];

  return config;
};

export function overrideDefaultControls(config) {
  config.widgets.default = Input;
  config.widgets.widget.textarea = TextArea;
  config.widgets.choices = SelectWidget;

  return config;
}
