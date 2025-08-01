// composables/useBreadcrumb.js
import { computed } from "vue";

export const useBreadcrumb = (route, menuItems) => {
  // 递归查找匹配的面包屑项
  const findBreadcrumbItems = (
    pathParts,
    menus,
    currentPath = "",
    breadcrumbs = []
  ) => {
    if (pathParts.length === 0) return breadcrumbs;

    const [currentPart, ...remainingParts] = pathParts;
    const newPath = `${currentPath}/${currentPart}`.replace(/\/+/g, "/");

    // 查找匹配当前路径的菜单项
    const matchedMenu = menus.find((menu) => {
      const menuPath = menu.path.startsWith("/")
        ? menu.path
        : `${currentPath}/${menu.path}`.replace(/\/+/g, "/");
      return menuPath === newPath;
    });

    if (matchedMenu) {
      const newBreadcrumbs = [
        ...breadcrumbs,
        {
          path: newPath,
          title: matchedMenu.seoMeta?.title || matchedMenu.name,
        },
      ];

      // 如果有子菜单且还有剩余路径部分，继续递归查找
      if (remainingParts.length > 0 && matchedMenu.children) {
        return findBreadcrumbItems(
          remainingParts,
          matchedMenu.children,
          newPath,
          newBreadcrumbs
        );
      }
      return newBreadcrumbs;
    }

    return breadcrumbs;
  };

  // 生成面包屑数据
  const breadcrumbItems = computed(() => {
    // 总是包含首页
    const items = [
      {
        path: "/",
        title: "Home",
      },
    ];

    // 分割当前路径
    const pathParts = route.path.split("/").filter((p) => p);

    // 查找匹配的面包屑项
    const matchedItems = findBreadcrumbItems(pathParts, menuItems);

    // 合并首页和匹配的项
    return [...items, ...matchedItems];
  });

  return {
    breadcrumbItems,
  };
};
