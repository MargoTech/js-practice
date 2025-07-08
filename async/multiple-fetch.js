async function fetchData() {
  try {
    const response = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const [usersRes, postsRes, commentsRes] = response;
    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    for (const user of users) {
      const userPosts = posts.filter((post) => post.userId === user.id);
      const postIds = userPosts.map((post) => post.id);
      const userComments = comments.filter((comment) =>
        postIds.includes(comment.postId)
      );
      console.log(
        `👤${user.name}, 📝${userPosts.length}, 💬${userComments.length}`
      );
    }
  } catch (error) {
    console.log("error", error);
  }
}
fetchData();
