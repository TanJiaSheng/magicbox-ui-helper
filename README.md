### MagicBox-UI-Hepler

MagicBox-UI-Hepler is a VS Code Extension for MagicBox_UI.

### Through VS Code Extensions

+ From website: Go to Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/vscode), and search 'magicbox-ui-helper', then click the install button.
+ From VS Code: click extensions sidebar, and search 'magicbox-ui-helper', then click the install button.

### Document Hover Tips

The only step to use this extension is moving your cursor to MagicBox-UI tag or prop.

### Autocomplete

### Snippets List

1. All the Magic Box tags below, ignore the closure and more detailed information. Such as `bkr` to `<bk-radio>`, actually that represents `<bk-radio v-model="${1}" label="${2}">$3</bk-radio>`
2. The sinppets' order follows the order of the components of Guide on Magic Box official website basically. <!--Supply extra General and Options parts.-->
3. Totally 101 snippets. Will add more if necessary.
4. **Only work in .vue file for now.**

#### Basic Part

|No.|Trigger&nbsp;Key|Element Tag|
|:------:|:--------------:|:--------|
|1. | `bkrow` | `<bk-row>` |
|2. | `bkcol` | `<bk-col>` |
|3. | `bkcpr` | `#1272FF` |
|4. | `bkcd` | `#FF9214` |
|5. | `bkcs` | `#27C274` |
|6. | `bkcw` | `#FFC01F` |
|7. | `bkcgery` | `#B2BDCC` |
|8. | `bkb` | `<bk-button>` |
|9. | `elbg` | `<bk-button-group>` |
|10. | `bkl` | `<bk-link>` |
|11. | `bkicon` | `<bk-icon>` |

#### Form Part

|No. |  Trigger&nbsp;Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `bkr` | `<bk-radio>` |
|2. | `bkrg` | `<bk-radio-group>` |
|3. | `bkrbg` | `<bk-radio-group> with <bk-radio-button>` |
|4. | `bkrb` | `<bk-radio-button>` |
|5. | `bkc` | `<bk-checkbox>` |
|6. | `bkcg` | `<bk-checkbox-group>` |
|9. | `bki` | `<bk-input>` |
|10. | `bkit` | `<bk-input type="textarea">` |
|11. | `bkti` | `<bk-tag-input>` |
|12. | `bkis` | `<template slot=''>` |
|13. | `bkin` | `<bk-input type="number">` |
|14. | `bksel` | `<bk-select>` |
|15. | `bkselr` | `<bk-select :remote-method="">` |
|16. | `bkop` | `<bk-option>` |
|17. | `bkopg` | `<bk-option-group>` |
|18. | `bkssel` | `<bk-search-select>` |
|19. | `bksselr` | `<bk-search-select :remote-method="">` |
|20. | `bkca` | `<bk-cascade>`|
|21. | `bksw` | `<bk-swtichr>` |
|22. | `bkcp` | `<bk-color-picker>` |
|23. | `bksl` | `<bk-slider>` |
|24. | `bkdp` | `<bk-date-picker>` |
|25. | `bkdpr` | `<bk-date-picker type="datetimerange">` |
|26. | `bkdpup` | `<bk-date-picker up-to-now>` |
|27. | `bkdtp` | `<bk-time-picker type="time">` |
|28. | `bkdtpr` | `<bk-time-picker type="timerange">` |
|29. | `bkcal` | `<bk-calendar>` |
|30. | `bkalm` | `<bk-almanac>` |
|31. | `bkup` | `<bk-upload>` |
|32. | `bkra` | `<bk-rate>` |
|33. | `bktr` | `<bk-transfer>` |
|34. | `bkf` | `<bk-form>` |
|35. | `bkfi` | `<bk-form-item>` |

#### Data Part

|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `bkt` | `<bk-table>` |
|2. | `bktc` | `<bk-table-column>` |
|3. | `bktpage` | `<bk-table :pagination="">` |
|3. | `bkta` | `<bk-tag>` |
|4. | `bkpr` | `<bk-progress>` |
|5. | `bkrpr` | `<bk-round-progress>` |
|6. | `bktree` | `<bk-tree>` |
|7. | `bktbree` | `<bk-big-tree>` |
|8. | `bktl` | `<bk-timeline>` |
|9. | `bkcolla` | `<bk-collapse>` |
|10. | `bkcollai` | `<bk-collapse-item>` |
|11. | `bkdiff` | `<bk-diff>` |
|12. | `bkdm` | `<bk-dropdown>` |
|13. | `bkdesc` | `<bk-description>` |
|14. | `bkdesci` | `<bk-description-item>` |
|15. | `bkswiper` | `<bk-swiper>` |
|16. | `bkp` | `<bk-pagination>` |
|17. | `bkba` | `<bk-badge>` |
|18. | `bkan` | `<bk-animate-number>` |
|19. | `bkim` | `<bk-image>` |
|20. | `bkimp` | `<bk-image :preview-src-list="">` |
|21. | `bkzi` | `<bk-zoom-image>` |
|22. | `bkvs` | `<bk-virtual-scroll>` |

#### Notice Part

|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `bkal` | `<bk-alert>` |
|2. | `bkex` | `<bk-exception>` |
|3. | `bkpo` | `<bk-popover>` |
|4. | `bksides` | `<bk-sideslider>` |
|5. | `bkpopc` | `<bk-popconfirm>` |
|6. | `bkdi` | `<bk-dialog>` |
|7. | `bkto` | `<bk-tooltip>` |
|8. | `bkcard` | `<bk-card>` |
|9. | `bkspin` | `<bk-spin>` |
|  |  | Attribute |
|10. | `bkvload` | `v-bkloading` |
|11. | `bkload` | `is-loading` |
|12. | `bktool` | `v-bk-tooltips` |
|13. | `bktoolt` | `v-bk-tooltips="{ theme: ''}"` |
|  |  | Method |
|14. | `bkinfo` | `this.$bkInfo({})` |
|15. | `bkload` | `this.$bkLoading({})` |
|16. | `bkme` | `this.$bkMessage({})` |
|17. | `bkmet` | `this.$bkMessage({ theme: '' })` |
|18. | `bkno` | `this.$bkNotify({})` |
|17. | `bknot` | `this.$bkNotify({ theme: '' })` |


#### Navigation Part

|No. |  Trigger Key | Element Tag|
|:------:|:--------------:|:--------|
|1. | `bksn` | `<bk-simple-nav>` |
|2. | `bkrl` | `<bk-resize-layout>` |
|3. | `bktab` | `<bk-tab>` |
|4. | `bktabp` | `<bk-tab-panel>` |
|5. | `bkbr` | `<bk-breadcrumb>` |
|6. | `bkbri` | `<bk-breadcrumb-item>` |
|7. | `bkdr` | `<bk-dropdown>` |
|8. | `bksts` | `<bk-steps>` |
|9. | `bkprocess` | `<bk-process>` |
|10. | `bkd` | `<bk-divider>` |
|11. | `bkfn` | `<bk-fixed-navbar>` |
|12. | `bkbtop` | `<bk-back-top>` |
|13. | `bkaf` | `<bk-affix>` |

####  Directive Part

|No. |  Trigger Key | Directive |
|:------:|:--------------:|:--------|
|1. | `bkvcos` | `v-bk-clickoutside>` |
|2. | `bkvot` | `v-bk-overflow-tips` |
|3. | `bkvcopy` | `v-bk-copy` |


[Reference link](https://github.com/HULANG-BTB/element-ui-helper.git)

