module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: false,
        stylexSheetName: "<>",
        genConditionalClasses: true,
        treeshakeCompensation: true,
        // disable on build
        // runtimeInjection: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
};
