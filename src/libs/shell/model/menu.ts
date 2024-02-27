import { SYSTEM_ROOT_PERMISSION } from "../../core";

export type Menu = {
  name: string;
  icon?: any;
  path: string;
  permissions?: string[];
  child?: Menu[];
};

// export function filterMenusByPermissions(menus: Menu[], permissionKeys: string[]): Menu[] {
//   return menus
//     .filter((menu) => {
//       // If the user has SYSTEM_ROOT permission, include the menu
//       if (permissionKeys.includes(SYSTEM_ROOT_PERMISSION)) {
//         return true;
//       }
//       // If the menu has permissions, check if the user has ALL of them
//       if (menu.permissions) {
//         return menu.permissions.every((permission) => permissionKeys.includes(permission));
//       }
//       // If the menu doesn't have any permissions, include it
//       return true;
//     })
//     .map((menu) => {
//       // If the menu has child menus, filter them recursively
//       if (menu.child) {
//         return { ...menu, child: filterMenusByPermissions(menu.child, permissionKeys) };
//       }
//       // If the menu doesn't have child menus, return it as is
//       return menu;
//     });
// }
export function filterMenusByPermissions(menus: Menu[], permissionKeys: string[]): Menu[] {
  return menus
    .filter((menu) => {
      // If the user has SYSTEM_ROOT permission, include the menu
      if (permissionKeys.includes(SYSTEM_ROOT_PERMISSION)) {
        return true;
      }
      // If the menu has permissions, check if the user has ALL of them
      if (menu.permissions) {
        return menu.permissions.every((permission) => permissionKeys.includes(permission));
      }
      // If the menu doesn't have any permissions, include it
      return true;
    })
    .map((menu) => {
      // If the menu has child menus, filter them recursively
      if (menu.child) {
        const filteredChildMenus = filterMenusByPermissions(menu.child, permissionKeys);
        // If all child menus are hidden, hide the parent menu as well
        if (filteredChildMenus.length === 0) {
          return null; // Hide the parent menu by returning null
        }
        return { ...menu, child: filteredChildMenus };
      }
      // If the menu doesn't have child menus, return it as is
      return menu;
    })
    .filter((menu) => menu !== null) as Menu[]; // Filter out the hidden parent menus
}