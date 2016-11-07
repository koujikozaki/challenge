/**
 * Select2 Japanese translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ja'] = {
        formatNoMatches: function () { return "該当なし"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "後" + n + "文字入れてください"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "検索文字列が" + n + "文字長すぎます"; },
        formatSelectionTooBig: function (limit) { return "最多で" + limit + "項目までしか選択できません"; },
        formatLoadMore: function (pageNumber) { return "読込中･･･"; },
        formatSearching: function () { return "検索中･･･"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ja']);
})(jQuery);


var ccmi18n = {
  expand: "\u958b\u304f",
  cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
  collapse: "\u9589\u3058\u308b",
  error: "\u30a8\u30e9\u30fc",
  deleteBlock: "\u30d6\u30ed\u30c3\u30af\u524a\u9664",
  deleteBlockMsg: "\u30d6\u30ed\u30c3\u30af\u304c\u6b63\u5e38\u306b\u524a\u9664\u3055\u308c\u307e\u3057\u305f\u3002",
  addBlock: "\u30d6\u30ed\u30c3\u30af\u3092\u8ffd\u52a0",
  addBlockNew: "\u30d6\u30ed\u30c3\u30af\u3092\u8ffd\u52a0",
  addBlockStack: "\u30b9\u30bf\u30c3\u30af\u3092\u8ffd\u52a0",
  addBlockStackMsg: "\u30b9\u30bf\u30c3\u30af\u304c\u6b63\u5e38\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f",
  addBlockPaste: "\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304b\u3089\u30da\u30fc\u30b9\u30c8",
  changeAreaCSS: "\u30c7\u30b6\u30a4\u30f3",
  editAreaLayout: "\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u7de8\u96c6",
  addAreaLayout: "\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u8ffd\u52a0",
  moveLayoutUp: "\u4e0a\u306b\u79fb\u52d5",
  moveLayoutDown: "\u4e0b\u306b\u79fb\u52d5",
  moveLayoutAtBoundary: "\u3053\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u9818\u57df\u306f\u3001\u3053\u306e\u65b9\u5411\u306b\u3053\u308c\u4ee5\u4e0a\u79fb\u52d5\u3067\u304d\u307e\u305b\u3093\u3002",
  areaLayoutPresets: "\u30ec\u30a4\u30a2\u30a6\u30c8\u30d7\u30ea\u30bb\u30c3\u30c8",
  lockAreaLayout: "\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u56fa\u5b9a",
  unlockAreaLayout: "\u30ec\u30a4\u30a2\u30a6\u30c8\u56fa\u5b9a\u3092\u89e3\u9664",
  deleteLayout: "\u524a\u9664",
  deleteLayoutOptsTitle: "\u30ec\u30a4\u30a2\u30a6\u30c8\u524a\u9664",
  confirmLayoutPresetDelete: "\u672c\u5f53\u306b\u3053\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
  setAreaPermissions: "\u6a29\u9650\u3092\u8a2d\u5b9a",
  addBlockMsg: "\u30d6\u30ed\u30c3\u30af\u304c\u6b63\u5e38\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002",
  updateBlock: "\u30d6\u30ed\u30c3\u30af\u3092\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",
  updateBlockMsg: "\u30d6\u30ed\u30c3\u30af\u304c\u6b63\u5e38\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002",
  copyBlockToScrapbookMsg: "\u30d6\u30ed\u30c3\u30af\u306f\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002",
  content: "\u8a18\u4e8b",
  closeWindow: "\u9589\u3058\u308b",
  editBlock: "\u7de8\u96c6",
  editBlockWithName: "%s \u3092\u7de8\u96c6",
  setPermissionsDeferredMsg: "\u6a29\u9650\u8a2d\u5b9a\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002\u3053\u306e\u5909\u66f4\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u5b8c\u4e86\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",
  editStackContents: "\u30b9\u30bf\u30c3\u30af\u306e\u5185\u5bb9\u3092\u7ba1\u7406\u3059\u308b",
  compareVersions: "\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6bd4\u3079\u308b",
  blockAreaMenu: "\u30d6\u30ed\u30c3\u30af\u3092\u8ffd\u52a0",
  arrangeBlock: "\u79fb\u52d5",
  arrangeBlockMsg: "\u30d6\u30ed\u30c3\u30af\u304c\u6b63\u5e38\u306b\u30a2\u30ec\u30f3\u30b8\u3055\u308c\u307e\u3057\u305f\u3002",
  copyBlockToScrapbook: "\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc",
  changeBlockTemplate: "\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",
  changeBlockCSS: "\u30c7\u30b6\u30a4\u30f3",
  errorCustomStylePresetNoName: "\u30ab\u30b9\u30bf\u30e0\u30b9\u30bf\u30a4\u30eb\u30d7\u30ea\u30bb\u30c3\u30c8\u306b\u540d\u524d\u3092\u4ed8\u3051\u3066\u304f\u3060\u3055\u3044\u3002",
  changeBlockBaseStyle: "\u30d6\u30ed\u30c3\u30afCSS\u30b9\u30bf\u30a4\u30eb\u3092\u8a2d\u5b9a",
  confirmCssReset: "\u3053\u308c\u3089\u3059\u3079\u3066\u306e\u30ab\u30b9\u30bf\u30e0\u30b9\u30bf\u30a4\u30eb\u3092\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
  confirmCssPresetDelete: "\u672c\u5f53\u306b\u3053\u306e\u30ab\u30b9\u30bf\u30e0\u30b9\u30bf\u30a4\u30eb\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f",
  setBlockPermissions: "\u6a29\u9650\u3092\u8a2d\u5b9a",
  setBlockAlias: "\u5b50\u30da\u30fc\u30b8\u306e\u8a2d\u5b9a",
  setBlockComposerSettings: "\u30b3\u30f3\u30dd\u30fc\u30b6\u30fc\u8a2d\u5b9a",
  themeBrowserTitle: "\u4ed6\u306e\u30c6\u30fc\u30de\u3092\u5165\u624b",
  themeBrowserLoading: "concrete5.org\u306e\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u304b\u3089\u30c6\u30fc\u30de\u3092\u691c\u7d22\u3057\u307e\u3059\u3002",
  addonBrowserLoading: "concrete5.org\u306e\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u304b\u3089\u30a2\u30c9\u30aa\u30f3\u3092\u691c\u7d22\u3057\u307e\u3059\u3002",
  clear: "\u30af\u30ea\u30a2",
  requestTimeout: "\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6642\u9593\u304c\u304b\u304b\u308a\u3059\u304e\u307e\u3057\u305f\u3002",
  generalRequestError: "\u4e88\u671f\u305b\u306c\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",
  helpPopup: "\u30d8\u30eb\u30d7",
  community: "concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9",
  communityCheckout: "concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9 - \u8cfc\u5165\uff06\u6c7a\u6e08",
  communityDownload: "concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9 - \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
  noIE6: "concrete5\u306e\u7de8\u96c6\u30e2\u30fc\u30c9\u306f\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e96\u306b\u306f\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002",
  helpPopupLoginMsg: "concrete5\u306b\u95a2\u3059\u308b\u8cea\u554f\u304c\u3042\u308c\u3070\u3001concrete5-japan.org\u306e\u30d5\u30a9\u30fc\u30e9\u30e0\u306b",
  marketplaceErrorMsg: "<p>\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002<\/p>",
  marketplaceInstallMsg: "<p>\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3057\u305f<\/p>",
  marketplaceLoadingMsg: "<p>concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u304b\u3089\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002<\/p>",
  marketplaceLoginMsg: "<p>\u30a2\u30c9\u30aa\u30f3\u3084\u30c6\u30fc\u30de\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002<\/p>",
  marketplaceLoginSuccessMsg: "<p>concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u3078\u306e\u30ed\u30b0\u30a4\u30f3\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002<\/p>",
  marketplaceLogoutSuccessMsg: "<p>concrete5\u30de\u30fc\u30b1\u30c3\u30c8\u30d7\u30ec\u30a4\u30b9\u304b\u3089\u6b63\u5e38\u306b\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u308c\u307e\u3057\u305f\u3002<\/p>",
  deleteAttributeValue: "\u3053\u306e\u5024\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",
  customizeSearch: "\u691c\u7d22\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
  properties: "\u30da\u30fc\u30b8\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",
  savePropertiesMsg: "\u30da\u30fc\u30b8\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002",
  saveSpeedSettingsMsg: "\u30d5\u30eb\u30da\u30fc\u30b8\u30ad\u30e3\u30c3\u30b7\u30e5\u8a2d\u5b9a\u3092\u4fdd\u5b58\u3057\u307e\u3057\u305f\u3002",
  saveUserSettingsMsg: "\u30e6\u30fc\u30b6\u30fc\u8a2d\u5b9a\u4fdd\u5b58",
  ok: "\u306f\u3044",
  scheduleGuestAccess: "\u671f\u9593\u6307\u5b9a\u30b2\u30b9\u30c8\u30a2\u30af\u30bb\u30b9",
  scheduleGuestAccessSuccess: "\u30b2\u30b9\u30c8\u30e6\u30fc\u30b6\u30fc\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u671f\u9593\u6307\u5b9a\u304c\u6b63\u5e38\u306b\u66f4\u65b0\u3055\u308c\u307e\u3057\u305f\u3002",
  newsflowLoading: "\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3044\u307e\u3059\u3002",
  x: "x",
  user_activate: "\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6709\u52b9\u306b\u3059\u308b",
  user_deactivate: "\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u505c\u6b62\u3059\u308b",
  user_delete: "\u524a\u9664",
  user_group_remove: "\u30b0\u30eb\u30fc\u30d7\u304b\u3089\u79fb\u52d5",
  user_group_add: "\u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0",
  none: "\u306a\u3057",
  editModeMsg: "\u30da\u30fc\u30b8\u306e\u7de8\u96c6\u3092\u958b\u59cb\u3057\u307e\u3057\u3087\u3046\u3002",
  editMode: "\u7de8\u96c6\u30e2\u30fc\u30c9",
  save: "\u4fdd\u5b58",
  currentImage: "\u73fe\u5728\u306e\u753b\u50cf",
  image: "\u753b\u50cf",
  size: "\u30b5\u30a4\u30ba",
  chooseFont: "\u30d5\u30a9\u30f3\u30c8\u9078\u629e",
  fontWeight: "\u30d5\u30a9\u30f3\u30c8\u30a6\u30a7\u30a4\u30c8",
  italic: "\u659c\u4f53",
  underline: "\u4e0b\u7dda",
  uppercase: "\u5927\u6587\u5b57",
  fontSize: "\u6587\u5b57\u30b5\u30a4\u30ba",
  letterSpacing: "\u5b57\u9593",
  lineHeight: "\u884c\u9593",
  emptyArea: "\u7a7a\u306e <%- area_handle %> \u30a8\u30ea\u30a2",
  fullArea: "This area is full!"};

var ccmi18n_editor = {
  insertLinkToFile: "\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30ea\u30f3\u30af\u3092\u633f\u5165",
  insertImage: "\u753b\u50cf\u3092\u8ffd\u52a0",
  insertLinkToPage: "\u30da\u30fc\u30b8\u30d8\u30ea\u30f3\u30af"};

var ccmi18n_sitemap = {
  seo: "SEO",
  pageLocation: "\u5834\u6240",
  pageLocationTitle: "\u5834\u6240",
  visitExternalLink: "\u8a2a\u554f",
  editExternalLink: "\u5916\u90e8\u30ea\u30f3\u30af\u3092\u7de8\u96c6",
  deleteExternalLink: "\u524a\u9664",
  copyProgressTitle: "\u8907\u88fd\u306e\u9032\u884c",
  addExternalLink: "\u5916\u90e8\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",
  sendToTop: "\u4e00\u756a\u4e0a\u306b\u79fb\u52d5",
  sendToBottom: "\u4e00\u756a\u4e0b\u306b\u79fb\u52d5",
  emptyTrash: "\u30b4\u30df\u7bb1\u3092\u7a7a\u306b\u3059\u308b",
  restorePage: "\u30da\u30fc\u30b8\u3092\u5fa9\u5143",
  deletePageForever: "\u5b8c\u5168\u306b\u524a\u9664",
  previewPage: "\u30d7\u30ec\u30d3\u30e5\u30fc",
  visitPage: "\u8a2a\u554f",
  pageAttributes: "\u5c5e\u6027",
  speedSettings: "\u30ad\u30e3\u30c3\u30b7\u30e5",
  speedSettingsTitle: "\u30ad\u30e3\u30c3\u30b7\u30e5",
  pageAttributesTitle: "\u5c5e\u6027",
  pagePermissionsTitle: "\u30da\u30fc\u30b8\u6a29\u9650",
  setPagePermissions: "\u6a29\u9650",
  setPagePermissionsMsg: "\u30da\u30fc\u30b8\u6a29\u9650\u304c\u6b63\u5e38\u306b\u66f4\u65b0\u3055\u308c\u307e\u3057\u305f\u3002",
  pageDesignMsg: "\u30c6\u30fc\u30de\u3068\u30da\u30fc\u30b8\u30bf\u30a4\u30d7\u304c\u6b63\u5e38\u306b\u66f4\u65b0\u3055\u308c\u307e\u3057\u305f\u3002",
  pageDesign: "\u30c7\u30b6\u30a4\u30f3\u3068\u30bf\u30a4\u30d7",
  pageVersions: "\u30d0\u30fc\u30b8\u30e7\u30f3",
  deletePage: "\u524a\u9664",
  deletePages: "\u30da\u30fc\u30b8\u524a\u9664",
  deletePageSuccessMsg: "\u30da\u30fc\u30b8\u304c\u6b63\u5e38\u306b\u524a\u9664\u3055\u308c\u307e\u3057\u305f\u3002",
  deletePageSuccessDeferredMsg: "\u524a\u9664\u7533\u8acb\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002\u30da\u30fc\u30b8\u3092\u5b8c\u5168\u306b\u524a\u9664\u3059\u308b\u306b\u306f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u5b8c\u4e86\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",
  addPage: "\u65b0\u898f\u30da\u30fc\u30b8",
  moveCopyPage: "\u79fb\u52d5\uff0f\u30b3\u30d4\u30fc",
  reorderPage: "\u30da\u30fc\u30b8\u9806\u3092\u5909\u66f4",
  reorderPageMessage: "\u30da\u30fc\u30b8\u3092\u79fb\u52d5\u30fb\u4e26\u3073\u66ff\u3048\u3059\u308b\u306b\u306f\u3001\u30a2\u30a4\u30b3\u30f3\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
  moveCopyPageMessage: "\u65b0\u3057\u3044\u89aa\u30da\u30fc\u30b8\u3092\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u304b\u3089\u9078\u629e",
  editInComposer: "\u30b3\u30f3\u30dd\u30fc\u30b6\u30fc\u3067\u7de8\u96c6",
  searchPages: "\u30da\u30fc\u30b8\u691c\u7d22",
  explorePages: "\u30d5\u30e9\u30c3\u30c8\u30d3\u30e5\u30fc",
  backToSitemap: "\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u623b\u308b",
  searchResults: "\u691c\u7d22\u7d50\u679c",
  createdBy: "\u4f5c\u6210\u8005",
  choosePage: "\u30da\u30fc\u30b8\u3092\u9078\u629e",
  viewing: "\u95b2\u89a7\u4e2d",
  results: "\u7d50\u679c",
  max: "\u6700\u5927",
  noResults: "\u8a72\u5f53\u3059\u308b\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
  areYouSure: "\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",
  loadingText: "\u8aad\u307f\u8fbc\u307f\u4e2d",
  loadError: "\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3002\u53d7\u4fe1\u3057\u305f\u30ec\u30b9\u30dd\u30f3\u30b9\uff1a",
  loadErrorTitle: "\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3002",
  on: "\u65e5\u6642"};

var ccmi18n_spellchecker = {
  resumeEditing: "\u7de8\u96c6\u3092\u7d9a\u3051\u308b",
  noSuggestions: "\u30d2\u30f3\u30c8\u306f\u3042\u308a\u307e\u305b\u3093"};

var ccmi18n_groups = {
  editGroup: "\u30b0\u30eb\u30fc\u30d7\u3092\u7de8\u96c6",
  editPermissions: "\u6a29\u9650\u3092\u7de8\u96c6"};

var ccmi18n_filemanager = {
  view: "\u8868\u793a",
  download: "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
  select: "\u9078\u629e",
  duplicateFile: "\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc",
  clear: "\u30af\u30ea\u30a2",
  edit: "\u7de8\u96c6",
  replace: "\u7f6e\u304d\u63db\u3048",
  duplicate: "\u30b3\u30d4\u30fc",
  chooseNew: "\u65b0\u30d5\u30a1\u30a4\u30eb\u9078\u629e",
  sets: "\u30bb\u30c3\u30c8",
  permissions: "\u6a29\u9650",
  properties: "\u8a2d\u5b9a",
  deleteFile: "\u524a\u9664",
  title: "\u30d5\u30a1\u30a4\u30eb\u30de\u30cd\u30fc\u30b8\u30e3\u30fc",
  uploadErrorChooseFile: "\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
  rescan: "\u518d\u30b9\u30ad\u30e3\u30f3",
  pending: "\u4fdd\u7559\u4e2d",
  uploadComplete: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u5b8c\u4e86",
  uploadFailed: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306b\u5931\u6557",
  uploadProgress: "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u9032\u6357",
  chosenTooMany: "\u30d5\u30a1\u30a4\u30eb\u306f\uff11\u3064\u307e\u3067\u9078\u629e\u3067\u304d\u307e\u3059\u3002",
  PTYPE_CUSTOM: "",
  PTYPE_NONE: "",
  PTYPE_ALL: "",
  FTYPE_IMAGE: 1,
  FTYPE_VIDEO: 2,
  FTYPE_TEXT: 3,
  FTYPE_AUDIO: 4,
  FTYPE_DOCUMENT: 5,
  FTYPE_APPLICATION: 6};

var ccmi18n_chosen = {
  placeholder_text_multiple: "\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e",
  placeholder_text_single: "\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e",
  no_results_text: "\u4e00\u81f4\u3059\u308b\u691c\u7d22\u7d50\u679c\u306f\u3042\u308a\u307e\u305b\u3093"};

var ccmi18n_topics = {
  addCategory: "\u30ab\u30c6\u30b4\u30ea\u3092\u8ffd\u52a0",
  editCategory: "\u30ab\u30c6\u30b4\u30ea\u3092\u7de8\u96c6",
  deleteCategory: "\u30ab\u30c6\u30b4\u30ea\u3092\u524a\u9664",
  cloneCategory: "\u30ab\u30c6\u30b4\u30ea\u3092\u8907\u88fd",
  addTopic: "\u30c8\u30d4\u30c3\u30af\u3092\u8ffd\u52a0",
  editTopic: "\u30c8\u30d4\u30c3\u30af\u3092\u7de8\u96c6",
  deleteTopic: "\u30c8\u30d4\u30c3\u30af\u3092\u524a\u9664",
  cloneTopic: "\u30c8\u30d4\u30c3\u30af\u3092\u8907\u88fd",
  editPermissions: "\u6a29\u9650\u3092\u7de8\u96c6"};

var ccmi18n_tourist = {
  skipButton: "<button class=\"btn btn-default btn-sm pull-right tour-next\">\u30b9\u30ad\u30c3\u30d7 \u2192<\/button>",
  nextButton: "<button class=\"btn btn-primary btn-sm pull-right tour-next\">\u6b21\u3078 \u2192<\/button>",
  finalButton: "<button class=\"btn btn-primary btn-sm pull-right tour-next\">\u5b8c\u4e86<\/button>",
  closeButton: "<a class=\"btn btn-close tour-close\" href=\"#\"><i class=\"fa fa-remove\"><\/i><\/a>",
  okButton: "<button class=\"btn btn-sm tour-close btn-primary\">\u306f\u3044<\/button>",
  doThis: "\u5b9f\u884c:",
  thenThis: "\u305d\u3057\u3066:",
  nextThis: "\u6b21\u306b:",
  stepXofY: "%2$d \u30b9\u30c6\u30c3\u30d7\u306e %1$d"};

var ccmi18n_helpGuides = {
  'add-page': [
    {title: "\u30da\u30fc\u30b8\u30d1\u30cd\u30eb", text: "\u30da\u30fc\u30b8\u30d1\u30cd\u30eb\u306f\u3001\u30b5\u30a4\u30c8\u306b\u65b0\u898f\u30da\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u65e2\u5b58\u306e\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u305f\u308a\u3059\u308b\u5834\u6240\u3067\u3059\u3002\u30da\u30fc\u30b8\u30d1\u30cd\u30eb\u3092\u958b\u304f\u306b\u306f\u3001\u3053\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"},
    {title: "\u30da\u30fc\u30b8\u30bf\u30a4\u30d7", text: "\u3053\u308c\u304c\u30da\u30fc\u30b8\u30bf\u30a4\u30d7\u306e\u4e00\u89a7\u3067\u3059\u3002\u3044\u305a\u308c\u304b\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30da\u30fc\u30b8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"},
    {title: "\u30b5\u30a4\u30c8\u30de\u30c3\u30d7", text: "\u3053\u308c\u306f\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3067\u3059\u3002\u30b5\u30a4\u30c8\u5185\u3092\u79fb\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}
  ],
  'change-content-edit-mode': [
    {title: "\u7de8\u96c6\u30e2\u30fc\u30c9\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3057\u305f", text: "\u30dc\u30bf\u30f3\u304c\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3055\u308c\u3001\u7de8\u96c6\u30e2\u30fc\u30c9\u306b\u306a\u3063\u3066\u3044\u308b\u72b6\u614b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"},
    {title: "\u30d6\u30ed\u30c3\u30af\u3092\u7de8\u96c6\u3059\u308b", text: "\u30da\u30fc\u30b8\u5185\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u30ed\u30fc\u30eb\u30aa\u30fc\u30d0\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30af\u30ea\u30c3\u30af\u307e\u305f\u306f\u30bf\u30c3\u30d7\u3059\u308b\u3068\u7de8\u96c6\u30e1\u30cb\u30e5\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"},
    {title: "\u7de8\u96c6\u30e1\u30cb\u30e5\u30fc", text: "\u3053\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u3001\u30d6\u30ed\u30c3\u30af\u3092\u7de8\u96c6\u3057\u305f\u308a\u3001\u8868\u793a\u3092\u5909\u66f4\u3057\u305f\u308a\u3001\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"},
    {title: "\u5909\u66f4\u3092\u4fdd\u5b58", text: "\u7de8\u96c6\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u5909\u66f4\u3092\u4fdd\u5b58\u3057\u3066\u4ed6\u306e\u7de8\u96c6\u8005\u306b\u3082\u898b\u3048\u308b\u3088\u3046\u306b\u3059\u308b\u304b\u3001\u5909\u66f4\u3092\u516c\u958b\u3057\u3066\u3059\u3050\u306b\u30b5\u30a4\u30c8\u306b\u53cd\u6620\u3055\u305b\u308b\u304b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}
  ],
  'change-content': [
    {title: "\u7de8\u96c6\u30e2\u30fc\u30c9\u306b\u5165\u308b", text: "\u307e\u305a\u3001\u300c\u3053\u306e\u30da\u30fc\u30b8\u3092\u7de8\u96c6\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u3053\u306e\u30da\u30fc\u30b8\u3092\u7de8\u96c6\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u3048\u3066\u304f\u3060\u3055\u3044\u3002"}
  ],
  'dashboard': [
    {title: "\u7ba1\u7406\u753b\u9762\u30d1\u30cd\u30eb", text: "\u7ba1\u7406\u753b\u9762\u3067\u306f\u3001\u30da\u30fc\u30b8\u3054\u3068\u3067\u306f\u306a\u3044\u30b5\u30a4\u30c8\u5168\u4f53\u306b\u95a2\u308f\u308b\u8a2d\u5b9a\u3092\u884c\u306a\u3044\u307e\u3059\u3002\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},
    {title: "\u30b5\u30a4\u30c8\u30de\u30c3\u30d7", text: "\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3067\u306f\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u69cb\u9020\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\u4e0d\u8981\u306a\u30da\u30fc\u30b8\u3092\u524a\u9664\u3057\u305f\u308a\u3001\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30c4\u30ea\u30fc\u69cb\u9020\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"}
  ],
  'location-panel': [
    {title: "\u5834\u6240\u3092\u9078\u629e", text: "\u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u304b\u3089\u30da\u30fc\u30b8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4fdd\u5b58\u3057\u305f\u969b\u306b\u3001\u3053\u306e\u30da\u30fc\u30b8\u304c\u65b0\u3057\u3044\u5834\u6240\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"},
    {title: "\u30da\u30fc\u30b8URL", text: "\u3053\u306e\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306eURL\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002\u30ab\u30ce\u30cb\u30ab\u30eb\u4ee5\u5916\u306eURL\u306f\u30ab\u30ce\u30cb\u30ab\u30ebURL\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002\u30ab\u30ce\u30cb\u30ab\u30ebURL\u306f\u751f\u6210\u3055\u308c\u305f\u3082\u306e\u304b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u304b\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u306e\u30b5\u30d6\u30da\u30fc\u30b8\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30ab\u30ce\u30cb\u30ab\u30ebURL\u304b\u3089\u59cb\u307e\u308a\u307e\u3059\u3002"}
  ],
  'personalize': [
    {title: "\u30d7\u30ed\u30d1\u30c6\u30a3\u30d1\u30cd\u30eb", text: "\u30d7\u30ed\u30d1\u30c6\u30a3\u30d1\u30cd\u30eb\u3067\u306f\u3001\u73fe\u5728\u306e\u30da\u30fc\u30b8\u306b\u95a2\u9023\u3059\u308b\u30c7\u30fc\u30bf\u3084\u30c7\u30b6\u30a4\u30f3\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3092\u884c\u306a\u3044\u307e\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u30d1\u30cd\u30eb\u3092\u958b\u304f\u306b\u306f\u3001\u30ae\u30a2\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},
    {title: "\u30da\u30fc\u30b8\u30c7\u30b6\u30a4\u30f3", text: "\u3053\u3053\u304b\u3089\u30da\u30fc\u30b8\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5909\u66f4\u3068\u3001\u30da\u30fc\u30b8\u306e\u30b9\u30bf\u30a4\u30eb\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u304c\u884c\u306a\u3048\u307e\u3059\u3002"},
    {title: "\u30ab\u30b9\u30bf\u30de\u30a4\u30ba", text: "\u3053\u3053\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30da\u30fc\u30b8\u306e\u30c6\u30fc\u30de\u30ab\u30b9\u30bf\u30de\u30a4\u30b6\u30fc\u3092\u958b\u304d\u307e\u3059\u3002"}
  ],
  'toolbar': [
    {title: "\u7de8\u96c6\u30e2\u30fc\u30c9", text: "\u3053\u306e\u30da\u30fc\u30b8\u3092\u7de8\u96c6\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u925b\u7b46\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},
    {title: "\u8a2d\u5b9a", text: "\u898b\u305f\u76ee\u3084SEO\u3001\u6a29\u9650\u306a\u3069\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5909\u66f4\u3001\u30da\u30fc\u30b8\u306e\u524a\u9664\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30ed\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u3053\u3053\u304b\u3089\u884c\u306a\u3044\u307e\u3059\u3002"},
    {title: "\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8ffd\u52a0", text: "\u30da\u30fc\u30b8\u3078\u306e\u65b0\u3057\u3044\u30d6\u30ed\u30c3\u30af\u306e\u914d\u7f6e\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304b\u3089\u306e\u30d6\u30ed\u30c3\u30af\u306e\u8ffd\u52a0\u3084\u30b9\u30bf\u30c3\u30af\u306e\u8ffd\u52a0\u304c\u884c\u306a\u3048\u307e\u3059\u3002"},
    {title: "\u691c\u7d22", text: "\u30da\u30fc\u30b8\u3092\u898b\u5931\u3063\u305f\u3089\u3001\u3053\u3053\u304b\u3089\u691c\u7d22\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u7ba1\u7406\u753b\u9762\u5185\u306e\u30da\u30fc\u30b8\u3084\u30b5\u30a4\u30c8\u5185\u306e\u30da\u30fc\u30b8\u3092\u691c\u7d22\u3067\u304d\u307e\u3059\u3002"},
    {title: "\u65b0\u898f\u30da\u30fc\u30b8", text: "\u30b5\u30a4\u30c8\u306b\u65b0\u3057\u3044\u30da\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u305f\u308a\u3001\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u304b\u3089\u7d20\u65e9\u304f\u4ed6\u306e\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"},
    {title: "\u7ba1\u7406\u753b\u9762", text: "\u500b\u5225\u306e\u30da\u30fc\u30b8\u4ee5\u5916\u306b\u95a2\u3059\u308b\u3053\u3068\u306f\u3001\u3053\u3053\u304b\u3089\u30b9\u30bf\u30fc\u30c8\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u3084\u30d5\u30a1\u30a4\u30eb\u306e\u7ba1\u7406\u3084\u30ed\u30b0\u306e\u78ba\u8a8d\u3001\u30b5\u30a4\u30c8\u5168\u4f53\u306e\u8a2d\u5b9a\u3092\u884c\u306a\u3044\u307e\u3059\u3002"}
  ]
}

