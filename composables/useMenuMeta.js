// 菜单数据
const MENU_ITEMS = [
  {
    path: "/",
    name: "Home",
    title: "Home",
    seoMeta: {
      title: "Home",
      icon: "",
      description: "",
    },
  },
  {
    path: "/about",
    name: "About",
    title: "About Us",
    seoMeta: {
      title: "About Us",
      icon: "",
      description: "",
    },
    children: [
      {
        path: "philosophy",
        name: "Philosophy",
        seoMeta: {
          title: "Corporate Philosophy",
          parent: "About Us",
          icon: "",
          description: "",
        },
      },
      {
        path: "certifications",
        name: "Certifications",
        seoMeta: {
          title: "Corporate Policies & Certifications",
          parent: "About Us",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "securitypolicy",
            name: "SecurityPolicy",
            seoMeta: {
              title: "Security Policy",
              parent: "Corporate Policies & Certifications",
              root: "About Us",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "informationsecurity",
            name: "InformationSecurityPolicy",
            seoMeta: {
              title: "Information Security Policy",
              parent: "Corporate Policies & Certifications",
              root: "About Us",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "businesscontinuity",
            name: "BusinessContinuityPolicy",
            seoMeta: {
              title: "Business Continuity Policy",
              parent: "Corporate Policies & Certifications",
              root: "About Us",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
      {
        path: "responsibility",
        name: "Responsibility",
        seoMeta: {
          title: "Corporate Social Responsibility",
          parent: "About Us",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "csrprofile",
            name: "CsrProfile",
            seoMeta: {
              title: "CSR Profile",
              parent: "Corporate Social Responsibility",
              root: "About Us",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "scholarshipsprogram",
            name: "ScholarshipsProgram",
            seoMeta: {
              title: "Scholarships Program",
              parent: "Corporate Social Responsibility",
              root: "About Us",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
      {
        path: "corporatereports",
        name: "CorporateReports",
        seoMeta: {
          title: "Corporate Reports",
          parent: "About Us",
          icon: "",
          description: "",
        },
      },
    ],
  },
  {
    path: "/terminal",
    name: "Terminal",
    title: "Terminal",
    seoMeta: {
      title: "Terminal",
      icon: "",
      description: "",
    },
    children: [
      {
        path: "specifications",
        name: "Specifications",
        seoMeta: {
          title: "Layout & Specifications",
          parent: "Terminal",
          icon: "",
          description: "",
        },
      },
      {
        path: "vessels",
        name: "Vessels",
        seoMeta: {
          title: "Vessels",
          parent: "Terminal",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "scheduled",
            name: "Scheduled",
            seoMeta: {
              title: "Scheduled",
              parent: "Vessels",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "working",
            name: "Working",
            seoMeta: {
              title: "Working",
              parent: "Vessels",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "longterm",
            name: "LongTerm",
            seoMeta: {
              title: "Long-Term",
              parent: "Vessels",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
      {
        path: "services",
        name: "Services",
        seoMeta: {
          title: "Services",
          parent: "Terminal",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "pcthpcs",
            name: "PCTHPCS",
            seoMeta: {
              title: "PCT HPCS",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "webip",
            name: "WebIP",
            seoMeta: {
              title: "Web IP",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "theautogatesystem",
            name: "TheAutogateSystem",
            seoMeta: {
              title: "Direct Access To The Autogate System",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "eHub",
            name: "EHub",
            seoMeta: {
              title: "eHub",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "terminalaccess",
            name: "TerminalAccess",
            seoMeta: {
              title: "Terminal Access",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "intermodaltransportation",
            name: "IntermodalTransportation",
            seoMeta: {
              title: "Intermodal Transportation",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "logisticservice",
            name: "LogisticService",
            seoMeta: {
              title: "Logistic Service",
              parent: "Services",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
      {
        path: "vatRegime",
        name: "VatRegime",
        seoMeta: {
          title: "Customs & VAT Regime",
          parent: "Terminal",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "freezonetypei",
            name: "FreeZoneTypeI",
            seoMeta: {
              title: "Free-Zone Type I",
              parent: "Customs & VAT Regime",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "defermentandreversevat",
            name: "DefermentAndReverseVAT",
            seoMeta: {
              title: "Deferment and Reverse VAT",
              parent: "Customs & VAT Regime",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "customsregime",
            name: "CustomsRegime",
            seoMeta: {
              title: "Customs Regime 42",
              parent: "Customs & VAT Regime",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "authorizationtemplate",
            name: "AuthorizationTemplateForReceipt",
            seoMeta: {
              title:
                "Authorization Template for receipt of cargo container from PCT S.A.",
              parent: "Customs & VAT Regime",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
      {
        path: "regulations",
        name: "Regulations",
        seoMeta: {
          title: "Procedures & Regulations",
          parent: "Terminal",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "operationsprocedures",
            name: "OperationsProcedures",
            seoMeta: {
              title: "Operations Procedures",
              parent: "Procedures & Regulations",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "unclaimedcargoregulation",
            name: "UnclaimedCargoRegulation",
            seoMeta: {
              title: "Unclaimed Cargo Regulation",
              parent: "Procedures & Regulations",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "vesselswastemanagementplan",
            name: "VesselsWasteManagementPlan",
            seoMeta: {
              title: "Vessels Waste Management Plan",
              parent: "Procedures & Regulations",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "safemooring",
            name: "SafeMooring",
            seoMeta: {
              title: "Safe Mooring",
              parent: "Procedures & Regulations",
              root: "Terminal",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/announcwements",
    name: "Announcwements",
    title: "Announcwements",
    seoMeta: {
      title: "Announcwements",
      icon: "",
      description: "",
    },
    children: [
      {
        path: "unclaimedcargo",
        name: "UnclaimedCargo",
        seoMeta: {
          title: "Unclaimed Cargo",
          parent: "Announcwements",
          icon: "",
          description: "",
        },
      },
      {
        path: "tenders",
        name: "Tenders",
        seoMeta: {
          title: "Tenders",
          parent: "Announcwements",
          icon: "",
          description: "",
        },
      },
    ],
  },
  {
    path: "/mediacenter",
    name: "MediaCenter",
    title: "Media Center",
    seoMeta: {
      title: "MediaCenter",
      icon: "",
      description: "",
    },
    children: [
      {
        path: "pctmediakit",
        name: "PctMediaKit",
        seoMeta: {
          title: "PCT Media Kit",
          parent: "Media Center",
          icon: "",
          description: "",
        },
        children: [
          {
            path: "photoideogallery",
            name: "PhotoVideoGallery",
            seoMeta: {
              title: "Photo & Video Gallery",
              parent: "PCT Media Kit",
              root: "Media Center",
              icon: "CaretRight",
              description: "",
            },
          },
          {
            path: "companypresentations",
            name: "CompanyPresentations",
            seoMeta: {
              title: "Company Presentations",
              parent: "PCT Media Kit",
              root: "Media Center",
              icon: "CaretRight",
              description: "",
            },
          },
        ],
      },
      {
        path: "companynews",
        name: "CompanyNews",
        seoMeta: {
          title: "Company News",
          parent: "Media Center",
          icon: "",
          description: "",
        },
      },
      {
        path: "pressreleases",
        name: "PressReleases",
        seoMeta: {
          title: "Press Releases",
          parent: "Media Center",
          icon: "",
          description: "",
        },
      },
    ],
  },
  {
    path: "/careers",
    name: "Careers",
    seoMeta: {
      title: "Careers",
      icon: "",
      description: "",
    },
    children: [
      {
        path: "opportunities",
        name: "Opportunities",
        seoMeta: {
          title: "Opportunities",
          parent: "Careers",
          icon: "",
          description: "",
        },
      },
    ],
  },
  {
    path: "/contactus",
    name: "Contact Us",
    seoMeta: {
      title: "Contact Us",
      icon: "",
      description: "",
    },
  },
];

export const useNavigation = () => {
  const menuItems = MENU_ITEMS;

  // 查找当前路由的完整路径信息（用于面包屑）
  const findRouteInfo = (path, items = menuItems) => {
    for (const item of items) {
      if (item.path === path) return [item];
      if (item.children) {
        const found = findRouteInfo(path, item.children);
        if (found) return [item, ...found];
      }
    }
    return null;
  };

  return {
    menuItems,
    findRouteInfo,
  };
};
