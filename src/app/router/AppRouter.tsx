import { SnackbarProvider } from 'notistack';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import LoadingBackdrop from '../../components/shared/loading/LoadingBackdrop';
import { MainLayout } from '../../layouts/MainLayout';

const Home = lazy(() => import('../../containers/home/Home'));

/* const SystemLogs = lazy(
  () => import('../../containers/system-logs/SystemLogs')
); */

const PageNotFound = lazy(
  () => import('../../containers/page-not-found/PageNotFound')
);

const AppRouter = () => {
  const router = createBrowserRouter(
    [
      // {
      //   path: '/',
      //   element: <Login />,
      // },
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
      basename: '',
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
