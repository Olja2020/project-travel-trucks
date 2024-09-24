import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsLoading, selectIsRefresh } from '../../redux/auth/selectors';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CatalogDetailsPage = lazy(() => import('../../pages/CatalogDetailsPage/CatalogDetailsPage.jsx'));
const NotFoundPage = lazy(() =>  import('../../pages/NotFoundPage/NotFoundPage'));


export default function App() {

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <SharedLayout>
        <Toaster />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CatalogDetailsPage/>} />
            <Route path="*" element={<NotFoundPage />} />
            {isLoading && <Loader />}
          </Routes>
        </Suspense>
      </SharedLayout>
    </div>
  );
}
