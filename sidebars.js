module.exports = {
  home: [
    {
      type: 'category',
      label: 'Feature Management',
      items: [{ type: "autogenerated", dirName: "home/feature-management" }],
      collapsible: false,
    },
    {
      type: 'category',
      label: 'Organization Management',
      items: [{ type: "autogenerated", dirName: "home/your-organization" }],
      collapsible: false,
    },
    {
      type: 'link',
      label: 'Release Notes',
      href: '/home/release-notes', // The internal path
    },
  ],
  sdks: [
    {
      type: "category",
      label: "SDKs",
      link: {type: 'doc', id: 'sdk/index'},
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "sdk" }],
    }
  ],
  tools: [
    {
      type: "category",
      label: "Tools & Integrations",
      link: {type: 'doc', id: 'tools-and-integrations/index'},
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "tools-and-integrations" }],
    }
  ],
  bestPractices: [
    {
    type: "category",
    label: "Best Practices",
    link: {type: 'doc', id: 'best-practices/index'},
    collapsed: false,
    collapsible: false,
    items: [{ type: "autogenerated", dirName: "best-practices" }],
    }
  ],
};
