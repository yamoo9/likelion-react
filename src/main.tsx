import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import '@/styles/global.css';

import Index from './routes';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/Contact';
import ContactEdit, { action as contactEditAction } from './routes/ContactEdit';
import { action as destoryAction } from './routes/ContactDestory';
import RootLayout, {
  loader as rootLoader,
  action as rootAction,
} from '@/routes/RootLayout';
import NotFound from './routes/NotFound';

/* 라우터 구성 스타일 ------------------------------------------------------------ */

// 1. 라우트 구성 객체
const routesConfig = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Index /> },
          {
            path: '/contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: '/contacts/:contactId/edit',
            element: <ContactEdit />,
            loader: contactLoader,
            action: contactEditAction,
          },
          {
            path: '/contacts/:contactId/destory',
            action: destoryAction,
            errorElement: <div role="alert">Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
];

// 2. JSX
const routesFromElements = createRoutesFromElements(
  <Route
    path="/"
    element={<RootLayout />}
    loader={rootLoader}
    action={rootAction}
    errorElement={<NotFound />}
  >
    <Route errorElement={<NotFound />}>
      <Route index element={<Index />} />
      <Route
        path="contacts/:contactId"
        element={<Contact />}
        loader={contactLoader}
        action={contactAction}
      />
      <Route
        path="contacts/:contactId/edit"
        element={<ContactEdit />}
        loader={contactLoader}
        action={contactEditAction}
      />
      <Route path="contacts/:contactId/destory" action={destoryAction} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routesFromElements);

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
