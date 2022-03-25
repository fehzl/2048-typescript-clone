const esbuild = require("esbuild");
const copy = require("esbuild-copy-static-files");

const args = process.argv.slice(2);

const isBool = (val) => /^(true|false)$/.test(val);

const options = args.reduce((res, arg) => {
  const [key, val] = arg.split("=");

  return { ...res, [key]: isBool(val) ? JSON.parse(val) : val };
}, {});

esbuild.build({
  outdir: "dist",
  plugins: [copy({ src: "./public", dest: "./dist", recursive: true })],
});

esbuild
  .build({
    ...options,
    bundle: true,
    entryPoints: ["./src/index.js"],
    outfile: "dist/bundle.js",
    format: "esm",
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
