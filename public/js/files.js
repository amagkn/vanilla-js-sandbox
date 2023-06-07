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
