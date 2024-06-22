const posts = [
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Garima",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock post for this coding challenge. this needs to be completed in two hours. this needs to be completed in two hours. this needs to be completed in two hours. this needs to be completed in two hoursHello this is just some random post created to show an example mock post for this coding challenge.  this needs to be completed in two hoursHello this is just some random post created to show an example mock post for this coding challenge. this needs to be completed in two hours",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Reply",
    from: {
      name: "Viniket",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Reply",
    from: {
      name: "Bhushan",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Tanvi",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Rahul",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Deeksha",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Swati",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Ketki",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Preksha",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Sonali",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Gagan",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Pratiksha",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Reply",
    from: {
      name: "Bhagyashree",
      email: "garima@gmail.com",
    },
  },
  {
    fullText:
      "Hello this is just some random post created to show an example mock    post for this coding challenge",
    dateTimeCreated: "2020-07-20T18:44:11Z",
    dateTimeLastModified: "2020-07-20T18:44:11Z",
    type: "Post",
    from: {
      name: "Milind",
      email: "garima@gmail.com",
    },
  },
];

const postTypes = Object.freeze({
  Post: "posted",
  Reply: "replied",
});

const postsPerPage = 5;
const maxTextPerPost = 500;
const input = document.querySelector(".search");
const postContainer = document.querySelector(".post-container");
const pageContainer = document.querySelector(".page-container");

function search(searchText) {
  const posts = document.querySelectorAll(".post-section");

  posts.forEach((post) => {
    const postTextContainer = post.querySelector(".post-text");
    const postText = postTextContainer?.textContent;
    let newTexts = postText.split(searchText);
    postTextContainer.remove();

    const newPostText = document.createElement("p");
    newPostText.classList.add("post-text");

    newTexts.forEach((text, index) => {
      let span = document.createElement("span");
      span.textContent = text;
      newPostText.append(span);

      if (index < newTexts.length - 1) {
        const highlightedSpan = document.createElement("span");
        highlightedSpan.classList.add("highlight");
        highlightedSpan.textContent = searchText;
        newPostText.append(highlightedSpan);
      }
    });

    post.append(newPostText);
  });
}

function handlePageBtnClick(e) {
  const btn = e.target;
  if (btn.classList.contains("button")) {
    const activeBtn = document.querySelector(".active");
    activeBtn.classList.remove("active");
    btn.classList.add("active");
    renderPost(posts);
    debouncedSearch(input.value);
  }
}

function renderPaginationBtns(posts) {
  pageContainer.innerHTML = "";

  const noOfPages = Math.ceil(posts.length / postsPerPage);
  const btnsWrapper = document.createElement("div");
  for (let i = 1; i <= noOfPages; i++) {
    const btn = document.createElement("button");
    i === 1
      ? btn.classList.add("button", "active")
      : btn.classList.add("button");
    btn.textContent = i;
    btnsWrapper.appendChild(btn);
  }

  btnsWrapper.addEventListener("click", handlePageBtnClick);
  pageContainer.appendChild(btnsWrapper);
}

function renderPost(posts) {
  postContainer.innerHTML = "";
  const postFragment = document.createDocumentFragment();
  const currentPage = document.querySelector(".active")?.textContent || 1;
  const currentPost = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  currentPost.forEach((post) => {
    const postSection = document.createElement("div");
    postSection.classList.add("post-section");

    const postedBy = document.createElement("span");
    postedBy.classList.add("posted-by");
    postedBy.textContent = post.from.name;

    const postType = document.createElement("span");
    postType.classList.add("post-type");
    postType.textContent = postTypes[post.type];

    const postDate = document.createElement("span");
    postDate.classList.add("post-type");
    postDate.textContent = new Date(post.dateTimeCreated).toLocaleTimeString();

    const postText = document.createElement("p");
    postText.textContent =
      post.fullText.length > maxTextPerPost
        ? post.fullText.slice(0, maxTextPerPost - 3) + "..."
        : post.fullText;
    postText.classList.add("post-text");

    postSection.append(postedBy, postType, postDate, postText);
    postFragment.append(postSection);
  });

  postContainer.appendChild(postFragment);
}

const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedSearch = debounce(search, 500);
input.addEventListener("keyup", (e) => {
  debouncedSearch(e.target.value);
});

renderPost(posts);
renderPaginationBtns(posts);
