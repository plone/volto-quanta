import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { ReduxAsyncConnect } from 'redux-connect';
import { loadableReady } from '@loadable/component';
import routes from '~/routes';
import { settings } from '~/config';
import '~/theme';

import configureStore from '@plone/volto/store';
import { Api, persistAuthToken, ScrollToTop } from '@plone/volto/helpers';

import * as Sentry from '@sentry/browser';
import initSentry from '@plone/volto/sentry';

import { ThemeProvider } from 'theme-ui';
import { quanta } from '~/theme';

export const history = createBrowserHistory();

initSentry(Sentry);

function reactIntlErrorHandler(error) {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint no-console: 0 */
    console.info(error);
  }
}

export default () => {
  const api = new Api();

  const store = configureStore(window.__data, history, api);
  persistAuthToken(store);

  // On Cypress we expose the history, the store and the settings
  // so we can access from Cypress and manipulate them
  if (window.Cypress) {
    window.appHistory = history;
    window.store = store;
    window.settings = settings;
  }

  loadableReady(() => {
    hydrate(
      <Provider store={store}>
        <IntlProvider onError={reactIntlErrorHandler}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={quanta}>
              <ScrollToTop>
                <ReduxAsyncConnect routes={routes} helpers={api} />
              </ScrollToTop>
            </ThemeProvider>
          </ConnectedRouter>
        </IntlProvider>
      </Provider>,
      document.getElementById('main'),
    );
  });
};
