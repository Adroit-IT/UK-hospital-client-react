import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import '@asset/styles/tailwind.css';
import 'flowbite';

// i18n (needs to be bundled)
import '@asset/i18n';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router';

// Redux
import store from '@config/themeRoot';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
