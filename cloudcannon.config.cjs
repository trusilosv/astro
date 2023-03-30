module.exports = {
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
      output: true,
      url: "/[slug]",
      _editables: {
        "content": {
          "blockquote": true,
          "bold": true,
          "format": "p h1 h2 h3 h4 h5 h6 pre address div",
          "italic": true,
          "strike": true,
          "subscript": true,
          "superscript": true,
          "underline": true,
          "link": true,
          "bulletedlist": true,
          "indent": true,
          "numberedlist": true,
          "outdent": true,
          "code": true,
          "embed": true,
          "horizontalrule": true,
          "image": true,
          "table": true,
          "undo": true,
          "redo": true,
          "removeformat": true,
          "copyformatting": true,
          "styles": "/css/editor.css",
          "left": "align-left",
          "center": "align-center",
          "right": "align-right",
          "justify": "align-justify",
          "image_size_attributes": true,
          "snippet": true
        }
      },
      _enabled_editors: ["content", "visual"],
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
  generator: {
    "metadata": {
      "markdown": "markdown-it",
      "markdown-it": {
        "html": true,
        "linkify": true
      }
    }
  }
};
