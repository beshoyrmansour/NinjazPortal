const data = [
  {
    id: "menu_dashboard",
    icon: "simple-icon-star",
    label: "menu.dashboard",
    to: "/app/dashboard"
  },
  {
    id: "menu_services",
    icon: "simple-icon-briefcase",
    label: "menu.services",
    to: "/app/services",
    subs: [
      {
        icon: "simple-icon-list",
        label: "menu.services.all_services",
        to: "/app/services"
      },
      {
        icon: "simple-icon-list",
        label: "menu.services.one_step_service_mode",
        to: "/app/services/easy"
      },
      {
        icon: "simple-icon-list",
        label: "menu.services.multi_step_service_mode",
        to: "/app/services/advanced"
      }
    ]
  },
  {
    id: "menu_my_order",
    // icon: "simple-icon-notebook",
    // icon: "iconsminds-library",
    icon: "simple-icon-basket",
    label: "menu.my_order",
    to: "/app/blank-page"
  },
  {
    id: "menu_my_finance",
    icon: "iconsminds-coins",
    label: "menu.my_finance",
    to: "/"
  },
  {
    id: "menu_my_account",
    // icon: "simple-icon-credit-card",
    // icon: "iconsminds-money-bag",
    icon: "simple-icon-wallet",
    label: "menu.my_account",
    to: "/"
  },
  {
    id: "menu_help_center",
    icon: "simple-icon-question",
    label: "menu.help_center",
    to: "/"
  }
];
export default data;
