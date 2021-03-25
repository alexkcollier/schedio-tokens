# [3.0.0-alpha.5](https://github.com/spartanbio/schedio-tokens/compare/v3.0.0-alpha.4...v3.0.0-alpha.5) (2021-03-25)


### Bug Fixes

* adds `availables-names` sass function ([093df51](https://github.com/spartanbio/schedio-tokens/commit/093df51319d98509657b0c03a7e686d7478c71e2))
* imports `colors` in shadows scss utils ([6ff0c0d](https://github.com/spartanbio/schedio-tokens/commit/6ff0c0db155f7ccb5e468b8d41fd565cea45085b))


### Features

* removes scss for `breakpoints`, `layout` and `typography` ([4fe1b5c](https://github.com/spartanbio/schedio-tokens/commit/4fe1b5cce56d9f2b1354090ecbb82cf022c629d6))
* replaces scss `[@import](https://github.com/import)` with `[@use](https://github.com/use)` and `[@forward](https://github.com/forward)` ([882dc9c](https://github.com/spartanbio/schedio-tokens/commit/882dc9c3363e94841357aa70aae1641124b596c0)), closes [#244](https://github.com/spartanbio/schedio-tokens/issues/244)


### BREAKING CHANGES

* Removes scss for `breakpoints`, `layout` and `typography`. Philosophically, they
belong more in `@spartanbio/schedio`.
* Drops support for `node-sass`. Use [`sass`](https://www.npmjs.com/package/sass)
instead.

# [3.0.0-alpha.4](https://github.com/spartanbio/schedio-tokens/compare/v3.0.0-alpha.3...v3.0.0-alpha.4) (2021-03-25)


### Bug Fixes

* removes duplicate token imports from SCSS ([78d3c16](https://github.com/spartanbio/schedio-tokens/commit/78d3c16018948605f7c1ecf711195090de77f9a4))


### Features

* removes CommonJS, simplifies `dist` ([e93a0b2](https://github.com/spartanbio/schedio-tokens/commit/e93a0b2473d2842fab6d770708c0838ae77c0471))


### BREAKING CHANGES

* CommonJS tokens are no longer provided, and the `dist` folder has been
simplified.

# [3.0.0-alpha.3](https://github.com/spartanbio/schedio-tokens/compare/v3.0.0-alpha.2...v3.0.0-alpha.3) (2021-03-24)


### Bug Fixes

* `font-weight` function uses correct map for available weights ([e557eff](https://github.com/spartanbio/schedio-tokens/commit/e557eff490671bf4e7c221c4d48e8b2d76084e8b))


### Features

* adds `font-size-9` at `5rem` ([657edf8](https://github.com/spartanbio/schedio-tokens/commit/657edf89529f7cda065aafb58a461fce4865e709))
* introduces `1.25rem` font size as `font-size-4` ([4f0fe49](https://github.com/spartanbio/schedio-tokens/commit/4f0fe49ca381deb78f37befb21d1108d80f439ec))
* reorders font-size tokens from smallest to largest ([abcace5](https://github.com/spartanbio/schedio-tokens/commit/abcace513ac520720eb690d5e79807547b4591f9))
* updates `font-size-8` to `4rem` ([feb1b17](https://github.com/spartanbio/schedio-tokens/commit/feb1b17988f6955995704e7e869e0e2b62af33d9))
* updates SCSS utilities to match new font sizes ([bd9edb0](https://github.com/spartanbio/schedio-tokens/commit/bd9edb09aebd3b053388e32c3ae008f7772702e0))


### BREAKING CHANGES

* `font-size-4` is now `1.25rem`. Font size tokens now range from 1-8.
* Larger font-size tokens now end with larger numbers
(i.e: `$font-size-7: 5rem;` and `$font-size-1: 0.5rem;`)

# [3.0.0-alpha.2](https://github.com/spartanbio/schedio-tokens/compare/v3.0.0-alpha.1...v3.0.0-alpha.2) (2021-03-19)


### Features

* removes Flutter tokens ([5672a9f](https://github.com/spartanbio/schedio-tokens/commit/5672a9fb525bd0f27e5d2f210877c403e905d94e))


### BREAKING CHANGES

* Dart and Flutter support has been removed

# [3.0.0-alpha.1](https://github.com/spartanbio/schedio-tokens/compare/v2.1.1...v3.0.0-alpha.1) (2021-03-18)


### Features

* changes `font-weight-demi` to `font-weight-semi` ([22767ed](https://github.com/spartanbio/schedio-tokens/commit/22767ede6f8343bf9ce989052046c78364dbd154))
* changes primary font face to Inter ([9a95342](https://github.com/spartanbio/schedio-tokens/commit/9a95342a33951993d2b5aa7ad573d14e0a03f5c9))
* sets JetBrains Mono as primary monospaced font ([3872c6f](https://github.com/spartanbio/schedio-tokens/commit/3872c6f97cc563cc00cbbd1eefb14e283fc0e8cf))


### BREAKING CHANGES

* The font weight tokens have been updated to match Inter's convention

## [2.1.1](https://github.com/spartanbio/schedio-tokens/compare/v2.1.0...v2.1.1) (2021-03-17)


### Bug Fixes

* uses unitless `line-height` for web, % for react-native ([788c914](https://github.com/spartanbio/schedio-tokens/commit/788c91476e7182e761cc51cb692fd8ef7632c74f))

## [2.1.1-alpha.1](https://github.com/spartanbio/schedio-tokens/compare/v2.1.0...v2.1.1-alpha.1) (2021-03-17)


### Bug Fixes

* uses unitless `line-height` for web, % for react-native ([788c914](https://github.com/spartanbio/schedio-tokens/commit/788c91476e7182e761cc51cb692fd8ef7632c74f))

# [2.1.0](https://github.com/spartanbio/schedio-tokens/compare/v2.0.0...v2.1.0) (2020-09-22)


### Bug Fixes

* adds typings properly ([c91bd27](https://github.com/spartanbio/schedio-tokens/commit/c91bd271004192d976521d6b6c3f841c0ed697e5))
* exports `ColorMap` definition ([0cb7e6a](https://github.com/spartanbio/schedio-tokens/commit/0cb7e6aa8cf5df5cc7801e470a9871984802e590))
* exports `SchedioTokens` interface ([8aafc85](https://github.com/spartanbio/schedio-tokens/commit/8aafc8565f6dca15150854d2310b97e02e2188cd))
* includes `scss` in `files` ([b14c33a](https://github.com/spartanbio/schedio-tokens/commit/b14c33a2911cd2e25b5b52245e99a90c7cde8b0a))
* simplifies react-native exports ([61bb504](https://github.com/spartanbio/schedio-tokens/commit/61bb504c77562eceac79c53b85288668aa22c27a))
* updates main/module/type in `package.json` ([eb1eed1](https://github.com/spartanbio/schedio-tokens/commit/eb1eed10ad219cf788e8e0c4d6ee399806964019))


### Features

* adds scss utility functions ([14b04e8](https://github.com/spartanbio/schedio-tokens/commit/14b04e8efe9fc730f0796167d8082e76245c99a5))
* makes primary JS interface `Schedio` class ([b4c8bbe](https://github.com/spartanbio/schedio-tokens/commit/b4c8bbed14d899c65b6df9ed6fd8532d0ef03ec1))
* simplifies font sizes ([829239e](https://github.com/spartanbio/schedio-tokens/commit/829239e1aea00e6d3d14507983c8773f03797c7a))

# [2.1.0-alpha.4](https://github.com/spartanbio/schedio-tokens/compare/v2.1.0-alpha.3...v2.1.0-alpha.4) (2020-09-22)


### Features

* simplifies font sizes ([829239e](https://github.com/spartanbio/schedio-tokens/commit/829239e1aea00e6d3d14507983c8773f03797c7a))

# [2.1.0-alpha.3](https://github.com/spartanbio/schedio-tokens/compare/v2.1.0-alpha.2...v2.1.0-alpha.3) (2020-07-23)


### Bug Fixes

* includes `scss` in `files` ([b14c33a](https://github.com/spartanbio/schedio-tokens/commit/b14c33a2911cd2e25b5b52245e99a90c7cde8b0a))

# [2.1.0-alpha.2](https://github.com/spartanbio/schedio-tokens/compare/v2.1.0-alpha.1...v2.1.0-alpha.2) (2020-07-23)


### Features

* adds scss utility functions ([14b04e8](https://github.com/spartanbio/schedio-tokens/commit/14b04e8efe9fc730f0796167d8082e76245c99a5))

# [2.1.0-alpha.1](https://github.com/spartanbio/schedio-tokens/compare/v2.0.1-alpha.1...v2.1.0-alpha.1) (2020-07-23)


### Features

* makes primary JS interface `Schedio` class ([b4c8bbe](https://github.com/spartanbio/schedio-tokens/commit/b4c8bbed14d899c65b6df9ed6fd8532d0ef03ec1))

## [2.0.1-alpha.1](https://github.com/spartanbio/schedio-tokens/compare/v2.0.0...v2.0.1-alpha.1) (2020-07-21)


### Bug Fixes

* adds typings properly ([c91bd27](https://github.com/spartanbio/schedio-tokens/commit/c91bd271004192d976521d6b6c3f841c0ed697e5))
* exports `ColorMap` definition ([0cb7e6a](https://github.com/spartanbio/schedio-tokens/commit/0cb7e6aa8cf5df5cc7801e470a9871984802e590))
* exports `SchedioTokens` interface ([8aafc85](https://github.com/spartanbio/schedio-tokens/commit/8aafc8565f6dca15150854d2310b97e02e2188cd))
* simplifies react-native exports ([61bb504](https://github.com/spartanbio/schedio-tokens/commit/61bb504c77562eceac79c53b85288668aa22c27a))
* updates main/module/type in `package.json` ([eb1eed1](https://github.com/spartanbio/schedio-tokens/commit/eb1eed10ad219cf788e8e0c4d6ee399806964019))

# [2.0.0](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v1.2.0...v2.0.0) (2020-05-19)


### Bug Fixes

* **color:** improves ts type ([1fb714c](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/1fb714c1cc1af946ec21846e5cbb02310201e2f4))
* **color:** uses correct transform name ([e86dbac](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/e86dbac6b2f7784ca4694da2b41a4ab0e4cd9b34))
* **flutter:** updates whitespace ([9d27afa](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/9d27afae03e1586204c77c4ec0253c887d07b0c4))
* **react-native:** ensure tokens that should be numbers are ([ede8217](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/ede8217c39d6f6a27b43cd0acddaac568e987e9a))
* **react-native:** uses % for `line-height` ([5989dbe](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/5989dbe6dc9ac3a182c30bf61cbda139e709f343))


### Features

* **color:** improves color TS maps ([21e3d0e](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/21e3d0e118d549f390af0a49995cfa0537dd9d6a))
* adds types for react native ([b96c138](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b96c138a46fe9904cdb81f7cafbfc188516f07ad))
* **color:** adss es module map ([4264889](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/42648894906a946b73d3a7a71eac9cb7a244005e))
* **color:** sorts shades ([7b85273](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/7b852733cdc6ea4c846627f84694ae723c010454))
* **colors:** adds js color map ([cef184f](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/cef184f203ed208079ea97d757001f703b171bcc))
* **react-native:** adds react native `rem` conversion ([b78fd97](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b78fd97f929cf8b89683002594f3467aceb78829))
* **ts:** adds types ([d5179be](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/d5179be702a4b81499e0556c92c30089f1dbe4a1))
* removes prefixes from JSON tokens ([b02055a](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b02055af96a03600d777be46db49757580876194))
* **easing:** converts easing to array for js ([6bcc5cb](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/6bcc5cb13bd7a4532849575cd10b9071054e7c01))
* **shadow:** adds react-native shadow object ([8dcd6b9](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/8dcd6b965cdf02aa1b66da504f4bbb6f79c67952))
* **web:** adds es modules ([700e4ff](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/700e4ff4d9118609683a5a9c1eb9e95a24119b84))
* organizes dist by platform and language ([4761d46](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/4761d46ad834fda7795eb7a163f46f11ffc2a7e1))
* uses `rem` ([8e34713](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/8e34713ce06b093a0be7a64576e23f49395e09f8))


* feat(color)!: renames `spartan_blue` as `blue` ([c9552db](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/c9552db60b6c2a0dab6649ed8207e280b8c99fee))
* feat(duration)!: adds unitless duration for js ([d645771](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/d645771d45c0bbfa58b77f06bd22356f53f1d30a))


### BREAKING CHANGES

* `spartan_blue` is now `blue`
* web JS files moved to `dist/web/js/common-js/`
* new units
* restructured

# [2.0.0-alpha.12](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.11...v2.0.0-alpha.12) (2020-05-11)


### Bug Fixes

* **color:** improves ts type ([1fb714c](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/1fb714c1cc1af946ec21846e5cbb02310201e2f4))

# [2.0.0-alpha.11](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.10...v2.0.0-alpha.11) (2020-05-11)


### Features

* **color:** improves color TS maps ([21e3d0e](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/21e3d0e118d549f390af0a49995cfa0537dd9d6a))

# [2.0.0-alpha.10](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.9...v2.0.0-alpha.10) (2020-05-08)


### Features

* adds types for react native ([b96c138](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b96c138a46fe9904cdb81f7cafbfc188516f07ad))

# [2.0.0-alpha.9](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.8...v2.0.0-alpha.9) (2020-05-08)


### Features

* **ts:** adds types ([d5179be](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/d5179be702a4b81499e0556c92c30089f1dbe4a1))

# [2.0.0-alpha.8](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2020-05-08)


### Features

* **color:** sorts shades ([7b85273](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/7b852733cdc6ea4c846627f84694ae723c010454))

# [2.0.0-alpha.7](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2020-05-08)


* feat(color)!: renames `spartan_blue` as `blue` ([c9552db](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/c9552db60b6c2a0dab6649ed8207e280b8c99fee))


### BREAKING CHANGES

* `spartan_blue` is now `blue`

# [2.0.0-alpha.6](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2020-05-08)


### Features

* removes prefixes from JSON tokens ([b02055a](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b02055af96a03600d777be46db49757580876194))
* **color:** adss es module map ([4264889](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/42648894906a946b73d3a7a71eac9cb7a244005e))

# [2.0.0-alpha.5](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2020-05-07)


### Bug Fixes

* **color:** uses correct transform name ([e86dbac](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/e86dbac6b2f7784ca4694da2b41a4ab0e4cd9b34))
* **react-native:** ensure tokens that should be numbers are ([ede8217](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/ede8217c39d6f6a27b43cd0acddaac568e987e9a))


### Features

* **easing:** converts easing to array for js ([6bcc5cb](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/6bcc5cb13bd7a4532849575cd10b9071054e7c01))
* **shadow:** adds react-native shadow object ([8dcd6b9](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/8dcd6b965cdf02aa1b66da504f4bbb6f79c67952))
* **web:** adds es modules ([700e4ff](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/700e4ff4d9118609683a5a9c1eb9e95a24119b84))


* feat(duration)!: adds unitless duration for js ([d645771](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/d645771d45c0bbfa58b77f06bd22356f53f1d30a))


### BREAKING CHANGES

* web JS files moved to `dist/web/js/common-js/`

# [2.0.0-alpha.4](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2020-05-07)


### Bug Fixes

* **react-native:** uses % for `line-height` ([5989dbe](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/5989dbe6dc9ac3a182c30bf61cbda139e709f343))

# [2.0.0-alpha.3](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2020-05-06)


### Bug Fixes

* **flutter:** updates whitespace ([9d27afa](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/9d27afae03e1586204c77c4ec0253c887d07b0c4))

# [2.0.0-alpha.2](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2020-05-06)


### Features

* **colors:** adds js color map ([cef184f](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/cef184f203ed208079ea97d757001f703b171bcc))
* **react-native:** adds react native `rem` conversion ([b78fd97](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b78fd97f929cf8b89683002594f3467aceb78829))

# [2.0.0-alpha.1](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v1.2.0...v2.0.0-alpha.1) (2020-05-06)


### Features

* organizes dist by platform and language ([4761d46](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/4761d46ad834fda7795eb7a163f46f11ffc2a7e1))
* uses `rem` ([8e34713](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/8e34713ce06b093a0be7a64576e23f49395e09f8))


### BREAKING CHANGES

* new units
* restructured

# [1.2.0](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v1.1.1...v1.2.0) (2020-02-27)


### Features

* adds flutter color generation ([64edb0b](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/64edb0b8c6b7a97db20edc11d2032054b9abcee2))

## [1.1.1](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v1.1.0...v1.1.1) (2019-12-13)


### Bug Fixes

* corrects map name generation ([b21b2fe](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/b21b2fedaa11ba94ab197cc408529e9e4252f818))

# [1.1.0](https://gitlab.com/spartanbio-ux/schedio-tokens/compare/v1.0.0...v1.1.0) (2019-12-12)


### Bug Fixes

* prefixes colors ([6817c66](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/6817c669cc2cbb20be240673afff41d01faa9e96))
* separates font-weight and uses correct type ([a69a1d0](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/a69a1d010150ee5a3ddddb69f8302d56b63d0a66))


### Features

* adds border-radius, border-width, and shadow tokens ([9793f45](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/9793f453592814993c6aedc02e67042a512b79c0))
* removes map prefixes ([8a3a79e](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/8a3a79eaf0b3494026e94657f332eff6aa100443))

# 1.0.0 (2019-12-11)


### Features

* add LICENSE ([29887ac](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/29887acbbe8ac1eed666edf4f1aca8fc1e5f1b12))
* adds easing tokens ([06991c1](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/06991c11018765ccd7866d8c18560e3043bf1af5))
* initial separation from ([a22e8bf](https://gitlab.com/spartanbio-ux/schedio-tokens/commit/a22e8bf1ab7d5e918f55e9c3d01727ab4809df12))
