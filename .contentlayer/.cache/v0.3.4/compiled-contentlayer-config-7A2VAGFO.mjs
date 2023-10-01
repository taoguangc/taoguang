// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`
    }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.md*",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    author: {
      type: "string"
    },
    authorUrl: {
      type: "string"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Page]
});
export {
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7A2VAGFO.mjs.map
