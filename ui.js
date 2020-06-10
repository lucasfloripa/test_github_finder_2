class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display profile in UI
  showProfile(user) {
    const { avatar_url, html_url, followers, following, bio, email } = user;

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${avatar_url}">
            <a href="${html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-success">Followers: ${followers}</span>
            <span class="badge badge-info">Following: ${following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><span class="text-primary">Bio</span>: ${
                bio === null ? " " : bio
              }</li>
              <li class="list-group-item"><span class="text-primary">E-mail</span>: ${
                email === null ? " " : email
              }</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      const { html_url, name, description, language, stargazers_count } = repo;

      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-9 d-flex flex-column">
              <a href="${html_url}" target="_blank">${name}</a>
              <small class="text-muted">${
                description === null ? "without description" : description
              }</small>
            </div>
            <div class="col-md-3 d-flex justify-content-end align-self-center">
              <span class="badge badge-secondary mr-2">Language: ${
                language === null ? "without language" : language
              }</span>
              <span class="badge badge-primary">Stars: ${stargazers_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
