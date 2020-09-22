module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      { preset: 'conventionalcommits' },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'dist/**/*', label: 'tokens' },
          { path: 'docs/**/*', label: 'docs' },
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'yarn.lock',
          'CHANGELOG.md',
          'docs/',
          'dist/',
        ],
      },
    ],
  ],
};
