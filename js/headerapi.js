const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
const displayData = (display) => {
  //   console.log(display);
  const displayHeader = document.getElementById("header-container");
  display.news_category.forEach((data) => {
    // console.log(data);
    displayHeader.innerHTML += ` <a class="btn btn-ghost normal-case text-xl" onclick="categoriesLoad('${data?.category_id}')">${data?.category_name}</a>`;
  });
};
const categoriesLoad = (categoryId) => {
  //   console.log(categoryId);
  const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.data));
};
const displayCategory = (displayCa) => {
//   console.log(displayCa);
  const category = document.getElementById("dataCount");
  category.innerText = `${displayCa.length}`;
  const categoryName = document.getElementById("dataname");
  categoryName.innerText = `${displayCa.length}`;

//   all data load
const allData = document.getElementById("loadAllData")
  displayCa.forEach((data) => {
    allData.innerHTML +=`
  <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure class="lg:w-1/2 h-[300px]"><img src=${data.image_url} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">${data.title}</h2>
    <p>${data.details.slice(0,200)}..</p>
    <div>
    <div class="avatar">
  <div class="w-[70px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src=${data.author.img} />
  </div>
  <div class="ml-5 mt-5">
  <p>${data.author.name}</p>
    <p>${data.author.published_date}</p>
  </div>
</div>
  </div>
  </div>
  
</div>
  
  `
    console.log(data)});
};

loadData();
