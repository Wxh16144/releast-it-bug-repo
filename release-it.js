module.exports = {
  git: {
    commitMessage: 'release: ${version}',
    tagAnnotation: 'Release ${version}\n\n${changelog}',
    tagName: '${name}@${version}',
    push: false,
    pushRepo: 'origin',
  }
}
