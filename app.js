function getUserInfo() {
  var searchInp = document.getElementById("searchInput").value;
  console.log(searchInp, "searchInp");

  fetch("https://api.github.com/users/" + searchInp)
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      console.log(response, "res");
      dataSync(response);
    })
    .catch(function (err) {
      console.log(err, "err");
    });
}

function dataSync(response) {
  console.log(response, "function response");

  var avatar = response.avatar_url;
  var followerscount = response.followers;
  var followingcount = response.following;
  var publicrepos = response.public_repos;
  var name = response.name;
  var address = response.location;
  // var organization = response.events;

  document.getElementById(
    "img_avatar"
  ).style.backgroundImage = `url(${avatar})`;

  document.getElementById("followers-count").innerHTML = followerscount;
  document.getElementById("following-count").innerHTML = followingcount;
  document.getElementById("repos-count").innerHTML = publicrepos;
  document.getElementById("username").innerHTML = name;
  document.getElementById("useraddress").innerHTML = address;
}
