import {
  BarChart,
  Build,
  BuildOutlined,
  Calculate,
  CalendarTodayOutlined,
  Category,
  DateRangeOutlined,
  DeliveryDining,
  Groups,
  Home,
  Landscape,
  Leaderboard,
  ListAlt,
  ManageAccounts,
  MenuOutlined,
  MoneyOffCsred,
  Payment,
  PersonAdd,
  PlaylistAdd,
  Settings,
  ShoppingCart,
  SpeedOutlined,
  Storefront,
  VerifiedUser,
  WorkOutlineOutlined,
} from "@mui/icons-material";

import { Menu } from "../model/menu";

export const menus: Menu[] = [
  {
    name: "dashboard",
    path: "/",
    icon: Home,
  },
  {
    name: "user-management",
    path: "/user-management",
    icon: ManageAccounts,
    child: [
      {
        name: "users-list",
        path: "/users",
        icon: Groups,
      },
      {
        name: "create-user",
        path: "/create",
        icon: PersonAdd,
      },
      {
        name: "roles",
        path: "/roles",
        icon: VerifiedUser,
      },
    ],
  },
  {
    name: "union",
    path: "/union",
    icon: Groups,
  },
  {
    name: "store",
    path: "/store",
    icon: Storefront,
    child: [
      {
        name: "configuration",
        path: "/configuration",
        icon: Calculate
      },
      {
        name: "add-product",
        path: "/add-product",
        icon: PlaylistAdd
      },
      {
        name: "product-list",
        path: "/product-list",
        icon: ListAlt
      }
    ]
  },
  {
    name: "product-management",
    path: "/product-management",
    icon: Build,
    child: [
      {
        name: "categoory",
        path: "/category",
        icon: Category
      },
      {
        name: "product-list",
        path: "/product-list",
        icon: ListAlt
      },
    ]
  },
  {
    name: "order",
    path: "/order",
    icon: ShoppingCart
  },
  {
    name: "farmers",
    path: "/farmers",
    icon: Groups
  },
  {
    name: "farm",
    path: "/farm",
    icon: Landscape
  },
  {
    name: "discount",
    path: "/discount",
    icon: MoneyOffCsred
  },
  {
    name: "payment",
    path: "/payment",
    icon: Payment
  },
  {
    name: "delivery",
    path: "/delivery",
    icon: DeliveryDining
  },
  {
    name: "Report & Analytics",
    path: "/report-analytics",
    icon: BarChart
  }
];
