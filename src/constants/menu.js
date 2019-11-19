const data = [
  {
    id: "menu_dashboard",
    icon: "simple-icon-star",
    label: "menu.main_dashboard",
    to: "/app/gogo"
  },
  {
    id: "menu_services",
    icon: "simple-icon-briefcase",
    label: "menu.services",
    to: "/app/gogo"
  },
  {
    id: "menu_my_order",
    // icon: "simple-icon-notebook",
    // icon: "iconsminds-library",
    icon: "simple-icon-basket",
    label: "menu.my_order",
    to: "/app/second-menu"
    // subs: [
    //   {
    //     icon: "simple-icon-paper-plane",
    //     label: "menu.second",
    //     to: "/app/second-menu/second"
    //   }
    // ]
  },
  {
    id: "menu_my_finance",
    icon: "iconsminds-coins",
    label: "menu.my_finance",
    to: "/app/blank-page"
  },
  {
    id: "menu_my_account",
    // icon: "simple-icon-credit-card",
    // icon: "iconsminds-money-bag",
    icon: "simple-icon-wallet",
    label: "menu.my_account",
    to: "/app/blank-page"
  },
  {
    id: "menu_help_center",
    icon: "simple-icon-question",
    label: "menu.help_center",
    to: "/app/blank-page"
  }
];
export default data;
