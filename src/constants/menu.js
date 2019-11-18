const data = [
  {
    id: "main_dashboard",
    icon: "simple-icon-credit-card",
    label: "menu.main_dashboard",
    to: "/app/gogo"
  },
  {
    id: "main_dashboard1",

    icon: "iconsminds-management",
    label: "menu.main_dashboard",
    to: "/app/gogo"
  },
  {
    id: "secondmenu",
    icon: "simple-icon-notebook",
    icon: "iconsminds-library",
    label: "menu.second-menu",
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
    id: "blankpage",
    // icon: "simple-icon-credit-card",
    icon: "iconsminds-money-bag",

    label: "menu.blank-page",
    to: "/app/blank-page"
  },
  {
    id: "project",
    icon: "iconsminds-management",
    label: "menu.blank-page",
    to: "/app/blank-page"
  },
  {
    id: "docs",
    icon: "simple-icon-question",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow: true
  }
];
export default data;
