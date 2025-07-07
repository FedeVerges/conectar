import {
  BarChart,
  Home,
  ManageHistory,
  Settings,
  Subject,
  TableView,
} from '@mui/icons-material';

export const menuItems = [
  {
    text: 'Inicio',
    icon: <Home />,
    path: '/',
  },
  {
    text: 'Gestión de Tabulaciones',
    icon: <TableView />,
    path: '/tabulaciones',
  },
  {
    text: 'Procesos',
    icon: <ManageHistory />,
    path: '/procesos',
  },
  {
    text: 'Dashboard y Reportería',
    icon: <BarChart />,
    path: '/dashboard',
  },
  {
    text: 'Macros Globales',
    icon: <Settings />,
    path: '/macros-globales',
  },
  {
    text: 'Logs',
    icon: <Subject />,
    path: '/logs',
  },
];
