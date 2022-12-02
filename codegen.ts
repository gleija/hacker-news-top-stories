import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "server/src/schema.ts",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/generated-types/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
