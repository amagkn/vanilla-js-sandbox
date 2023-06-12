(function () {
  const form = document.getElementById("upload-file-form");
  const inputFile = document.getElementById("upload-file-form_file");
  const progressBar = document.getElementById("progress-bar");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", inputFile.files[0]);

    progressBar.classList.add("progress-bar__on");

    const request = new XMLHttpRequest();

    request.upload.addEventListener(
      "progress",
      (e) => {
        const percent = (e.loaded / e.total) * 100;
        console.log(progressBar, progressBar.value);
        progressBar.value = Math.round(percent);
      },
      false
    );

    request.open("POST", "/upload");
    request.send(formData);
  });
})();

(function () {
  const fruitsInput = document.getElementById("fruits-input");
  const fruitsBtn = document.getElementById("fruits-button");
  let selectedFruit = "";

  fruitsInput.addEventListener("change", (e) => {
    selectedFruit = e.target.value;

    fruitsBtn.innerText = e.target.value
      ? `Съесть ${e.target.value}`
      : "Выберите что съесть";
  });

  fruitsBtn.addEventListener("click", () => {
    if (selectedFruit) {
      alert(`${selectedFruit} был/было/была/были очень вкусным!!!`);
    }
  });
})();
