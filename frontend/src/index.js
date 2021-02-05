document.addEventListener("DOMContentLoaded", () => {
  const feedbackCollection = document.getElementById("feedback-container");
  const url = "http://localhost:8080/feedback";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((feedback) => {
        renderFeedback(feedback);
      });
    });

  function renderFeedback(feedback) {
    const li = document.createElement("ul");
    li.className = "li";
    li.id = feedback.id;
    li.innerHTML += `
  <p>Rating: ${feedback.rating}</p>
  <p><span>Comments: ${feedback.comments}</span></p>
  <br/>
  `;
    feedbackCollection.append(li);
  }

  function postFeedback(rating, comments) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        comments: comments,
      }),
    })
      .then((resp) => resp.json())
      .then((newFeedback) => renderFeedback(newFeedback));
  }

  document.addEventListener("submit", (event) => {
    event.preventDefault();

    let rating = document.getElementById("rating").value;
    let comments = document.getElementById("comment").value;

    postFeedback(rating, comments);
    document.getElementById("form").reset();
  });

});
