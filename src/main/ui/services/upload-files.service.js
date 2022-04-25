import http from "../http-common";
class UploadFilesService {
  async upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return await http.post("/api/v1/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
  async getFiles() {
    return http.get("/api/v1/files");
  }
}
export default new UploadFilesService();