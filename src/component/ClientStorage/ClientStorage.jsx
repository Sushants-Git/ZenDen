import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [pdfUpload, setPdfUpload] = useState(null);
  const [pageRefresh, setPageRefresh] = useState(false);
  const uploadPdf = () => {
    if (pdfUpload == null) return;
    let name = document.getElementById("name").value;
    let type = getType(pdfUpload.type);
    const pdfRef = ref(storage, `resume/${name}.${type} ${v4()}`);
    uploadBytes(pdfRef, pdfUpload).then(() => {
      alert("Resume Uploaded");
    });

    function getType(type) {
      console.log(type.length);
      let temp = "";
      let slashFound = false;
      for (let i = 0; i < type.length; i++) {
        if (slashFound) {
          temp += type[i];
        }
        if (type[i] === "/") {
          slashFound = true;
        }
      }
      return temp;
    }
  };

  return (
    <div className="client-storage">
      <form className="form">
        <div className="file-name">
          <label htmlFor="name">Name </label>
          <input id="name" type="text" required />
        </div>
        <div className="browse">
          <input
            type="file"
            onChange={(event) => setPdfUpload(event.target.files[0])}
            required
          />
        </div>
        <button className="cta-storage" type="button" onClick={uploadPdf}>
          Upload File
        </button>
      </form>
    </div>
  );
}

export default App;
