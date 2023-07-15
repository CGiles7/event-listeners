import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  const allButtons = document.querySelectorAll(".expand_button")
  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if(button.innerText === "V") {
        const articleControl = button.parentElement;
        const articleHead = articleControl.parentElement;
        const article = articleHead.parentElement;
        const articleBody = article.querySelector(".article_body");
        articleBody.style.display = "none"
        button.innerText = ">";
      } else {
        const articleControl = button.parentElement;
        const articleHead = articleControl.parentElement;
        const article = articleHead.parentElement;
        const articleBody = article.querySelector(".article_body");
        articleBody.style.display = "block"
        button.innerText = "V";
      }
    })
  })
}


/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  const allButtons = document.querySelectorAll(".highlightBtn")
  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if(button.innerText === "+") {
        const articleControl = button.parentElement;
        const articleHead = articleControl.parentElement;
        const article = articleHead.parentElement;
        article.classList.add("highlight")
        button.innerText = "-";
      } else {
        const articleControl = button.parentElement;
        const articleHead = articleControl.parentElement;
        const article = articleHead.parentElement;
        article.classList.remove("highlight")
        button.innerText= "+";
      }
    })
  })
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
