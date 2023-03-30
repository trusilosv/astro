module.exports = {
  generator: {
    "metadata": {
      "markdown": "markdown-it",
      "markdown-it": {
        "html": true,
        "linkify": true
      }
    }
  },
  paths: {
    data: "data",
    static: "public",
    uploads: "/src/assets/images/",
  },
  collections_config: {
    data: {
      path: "data",
      disable_add: true,
      disable_add_folder: true,
    },
    posts: {
      path: "src/content/post",
      url: "/[slug]",
      output: true,
      _enabled_editors: ["visual", "content"],
      add_options: [
        {
          name: "Add New Post",
          schema: "default",
          icon: "post_add",
        },
      ],
    },
    pages: {
      path: "src/content/pages",
      url: "/",
      output: true,
      icon: "wysiwyg",
      _enabled_editors: [ "visual"],
      add_options: [
        {
         
          schema: "default",
         
        },
      ],
    },
  },
};
