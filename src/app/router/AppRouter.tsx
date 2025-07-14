import { SnackbarProvider } from 'notistack';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import LoadingBackdrop from '../../components/shared/loading/LoadingBackdrop';
import { MainLayout } from '../../layouts/MainLayout';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const Login = lazy(() => import('../../containers/login/Login'));
const Form = lazy(() => import('../../containers/formulario/Form'));

/* const SystemLogs = lazy(
  () => import('../../containers/system-logs/SystemLogs')
); */

const PageNotFound = lazy(
  () => import('../../containers/page-not-found/PageNotFound')
);

const Home = lazy(() => import('../../containers/home/Home'));

const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: (
          <MainLayout>
            <Home />
            {/* <HomePrincipal /> */}
          </MainLayout>
        ),
      },
      {
        path: '/login',
        element: (
          <PublicRouter>
            <Login />
          </PublicRouter>
        ),
      },
      {
        path: '/formulario',
        element: (
          <PrivateRouter>
            <MainLayout>
              <Form />
            </MainLayout>
          </PrivateRouter>
        ),
      },
      {
        path: '/localidad',
        element: (
          <MainLayout>
            {/* <HomeLocalidad /> */}
            <>home con las categorias de la localidad.</>
          </MainLayout>
        ),
      },
      {
        path: '/<nombre-localidad>/<categoria>',
        element: (
          <MainLayout>
            {/* <HomeLocalidad /> */}
            <>Listado de comercios por categoria</>
          </MainLayout>
        ),
      },
      /* {
        path: '/logs',
        element: (
          <MainLayout>
            <SystemLogs />
          </MainLayout>
        ),
      }, */
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
    {
      basename: '/conectar',
    }
  );

  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={5000}
    >
      <Suspense /* fallback={<LoadingBackdrop />} */>
        <RouterProvider router={router} />
      </Suspense>
    </SnackbarProvider>
  );
};

export default AppRouter;
