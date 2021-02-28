import axios from "axios";

export default class UploadAdapter {
  constructor(loader, url) {
    this.url = url;
    this.loader = loader;
    this.loader.file.then((pic) => (this.file = pic));

    this.upload();
  }

  // Starts the upload process.
  upload() {
    const fd = new FormData();
    fd.append("upload", this.file);

    return new Promise((resolve, reject) => {
      axios
        .post(this.url, fd, {
          onUploadProgress: (e) => {
            console.log("onUploadProgress",
              // show upload process
              Math.round((e.loaded / e.total) * 100) + " %"
            );
          },
        })
        .then((response) => {
          console.log("thanh cong")
          resolve(response);
        })
        .catch((error) => {
          reject("Server Error");
          console.log("Server Error : ", error);
        });
    });
  }
}
