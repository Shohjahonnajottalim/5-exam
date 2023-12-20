async function getPostsAPI() {
  try {
    let res = await fetch(`http://localhost:3000/posts/`);
    let data = await res.json();
    pushPosts(data);
  } catch (error) {
    console.log(error);
  }
}

getPostsAPI();


function pushPosts(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class="poster" >
      <img src="${user.image}" alt="" width="547px";/>
              <a href="./blog-post.html" onclick="getPost(${user.id})" class="pos">
              
                  
                  <div class="matn">
                    <p class="tip">${user.category}</p>
                  <p class="boldd">${user.title}</p>
                    <p class="lor">
                      ${user.description}
                    </p>
              <h3>${user.author}</h3>
                  </div>
                  
                </a>
          `;
  });
  postsCard.innerHTML = str;
}

const postsCard = document.querySelector(".posts");
