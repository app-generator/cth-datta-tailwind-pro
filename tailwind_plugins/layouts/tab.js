const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '[data-pc-layout="tab"]': {
      '.pc-sidebar': {
        '.tab-container': {
          '@apply flex items-start': {},
          '.tab-sidemenu, .tab-link': {
            height: `calc(100vh - theme(spacing.header-height))`,
          },
          '.tab-sidemenu': {
            '@apply w-sidebar-tab-width ltr:border-r rtl:border-l border-[rgba(255,255,255,0.2)]': {},
            '.nav-link': {
              '@apply w-[50px] h-[50px] flex items-center justify-center transition-all text-theme-sidebarcolor dark:text-themedark-sidebarcolor hover:bg-theme-sidebarcolor/20 dark:hover:bg-themedark-sidebarcolor/20 cursor-pointer font-semibold text-[18px] p-0 my-1 mx-auto rounded-lg': {},
              'svg': {
                '@apply w-[22px] h-[22px]': {},
              },
              '&:focus,&.active': {
                '@apply text-primary-500 bg-primary-500/20': {},
              },
            }
          },
          '.tab-link': {
            '@apply flex-auto w-[1%] min-w-0': {},
          }
        },
        '.pc-caption, .pc-user-card': {
          '@apply hidden': {}
        },
        '.pc-mtext': {
          '@apply ml-2.5': {}
        },
        '.pc-micon': {
          '@apply mr-0': {}
        },
        '&:not(.pc-sidebar-hide)': {
          '@apply w-sidebar-tab-navbar-width': {},
          '.navbar-wrapper': {
            '@apply w-sidebar-tab-navbar-width': {}
          }
        },
        '.pc-navbar': {
          '> .pc-item': {
            '> .pc-submenu': {
              '.pc-link': {
                '@apply ltr:p-[12px_30px_12px_45px] ltr:after:left-[30px] rtl:p-[12px_45px_12px_30px] rtl:after:right-[30px]': {}
              }
            },
            '.pc-submenu': {
              '.pc-submenu': {
                '.pc-link': {
                  '@apply ltr:p-[12px_30px_12px_52px] ltr:after:left-[40px] rtl:p-[12px_52px_12px_30px] rtl:after:right-[40px]': {}
                },
                '.pc-submenu': {
                  '.pc-link': {
                    '@apply ltr:p-[12px_30px_12px_70px] ltr:after:left-[52px] rtl:p-[12px_70px_12px_30px] rtl:after:right-[52px]': {}
                  }
                }
              }
            }
          }
        },
        '@media (min-width: 1025px)': {
          '&:not(.pc-sidebar-hide)': {
            '~ .pc-header': {
              '@apply ltr:left-sidebar-tab-navbar-width rtl:right-sidebar-tab-navbar-width': {}
            },
            '~ .pc-container, ~ .pc-footer': {
              '@apply ltr:ml-sidebar-tab-navbar-width rtl:mr-sidebar-tab-navbar-width': {}
            }
          }
        },
        '@media (max-width: 1024px)': {
          '&:not(.mob-sidebar-active)': {
            '@apply ltr:-left-sidebar-tab-navbar-width rtl:-right-sidebar-tab-navbar-width': {}
          }
        }
      }
    }
  });
});
