// const cards = document.querySelector(".oll");

// let cardsContent = "";
// products.map((product) => {
//   cardsContent += `
//   <div class="post">
//   <div class="poster">
//     <img src="../images/1.png" alt="" />
//     <div class="matn">
//       <p class="tip">Business</p>
//       <p class="boldd">Top 6 free website mockup tools 2022</p>
//       <p class="lor">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Non blandit massa enim nec.
//       </p>
//     </div>
//   </div>
// </div>
//     `;
// });
// oll.innerHTML = cardsContent;

// //////////////////
// const API = `http://localhost:3000/posts/`;
// const getDate = async (resurse) => {
//   const request = await fetch(resurse);
//   const date = await request.json();
//   console.log(date);
// };
// getDate(API);

/////////////////////

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

// const getPost(a){

// }
