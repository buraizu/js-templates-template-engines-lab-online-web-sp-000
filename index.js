function createPost() {

  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  const title = document.getElementById("postTitle").value;
  const author = document.getElementById("postAuthor").value;
  const post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  const blogSection = postTemplate({ 'title': title, 'body': post, 'poster': author });
  const commentsSection = commentsTemplate();
  const postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  const commentText = document.getElementById("commentText").value;
  const commenterName = document.getElementById("commenter").value;

  const commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
