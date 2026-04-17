import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'services',
        Component: ServicesPage,
      },
      {
        path: 'portfolio',
        Component: PortfolioPage,
      },
      {
        path: 'contact',
        Component: ContactPage,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);