import { 
  SnippetsOutlined,
  WindowsOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {key: 'MENU',
  title: 'MENU',
  submenu: [
    {
      key: 'informacoes',
      path: `${APP_PREFIX_PATH}/info`,
      title: 'Detalhes técnicos',
      icon: WindowsOutlined,
      breadcrumb: false,
      submenu: []
      },
    {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Pedidos',
    icon: SnippetsOutlined,
    breadcrumb: false,
    submenu: []
    }
   ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
