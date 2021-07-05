/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  console.log("Page -", page.path);
  if (page.path.match(/^\/adopters/)) {
    createPage({
      path: "adopters",
      matchPath: "/adopters/*",
      component: path.resolve(`src/pages/adopters.tsx`),
    });
  }
};
