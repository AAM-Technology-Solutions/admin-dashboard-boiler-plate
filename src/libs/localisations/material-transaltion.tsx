import useTranslate from "./custom-translation";

export const MaterialTranslation = () => {
  const T = useTranslate();

  return {
    localization: {
      rowsPerPage: T("rowsPerPage"),
      actions: T("actions"),
      noRecordsToDisplay: T("no-data-available"),
      search: T("search"),
      showHideFilters: T("showHideFilters"),
      showHideSearch: T("showHideSearch"),
      showHideColumns: T("showHideColumns"),
      toggleDensity: T("toggleDensity"),
      toggleFullScreen: T("toggleFullScreen"),
      clearSort: T("clearSort"),
      clearFilter: T("clearFilter"),
      clearSearch: T("clearSearch"),
      hideAll: T("hideAll"),
      showAll: T("showAll"),
      showAllColumns: T("showAllColumns"),
      pinToLeft: T("pinToLeft"),
      pinToRight: T("pinToRight"),
      unpin: T("unpin"),
      unpinAll: T("unpinAll"),
    },
  };
};
