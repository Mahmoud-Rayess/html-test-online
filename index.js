function getTutorials() {
  fetch("http://localhost:8080/api/mahmoud/rayess/all")
    .then((response) => response.json())
    .then((json) => {
      let ddl_tutoriols = document.getElementById("ddl_tutorials");
      json.forEach((t) => {
        let _opt = document.createElement("option");
        _opt.value = t._id;
        _opt.innerHTML = t.title;
        ddl_tutoriols.appendChild(_opt);
      });
    });
}
getTutorials();
