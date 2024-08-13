export function removePostsWithEmptyFields(posts) {
  return posts.filter((post) => {
    return Object.values(post).every((value) => {
      // Check only first-level fields, ignore objects or arrays
      return value !== null && value !== ''
    })
  })
}
