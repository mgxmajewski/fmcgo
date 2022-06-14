const path = require('path');
const {createOpenGraphImage} = require("gatsby-plugin-open-graph-images");
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const openGraphImage = createOpenGraphImage(createPage, {
    path: "src/images/gobadge.png",
    component: path.resolve(`src/pages/index.js`),
    size: {
      width: 400,
      height: 50,
    },
    waitCondition: "networkidle0",
    context: {
      description: "a image created with gatsby-plugin-open-graph-images",
    },
  });
};