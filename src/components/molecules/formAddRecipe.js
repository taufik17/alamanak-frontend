import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function FormAddRecipe() {
  return (
    <>
      <div className="container text-center mt-5 pt-4 mb-5">
        <div className="row pt-4 align-items-center mb-4">
          <div className="col">
            <h4>Add Your Recipe</h4>
          </div>
        </div>

        <div className="mt-4">
          <CKEditor
            editor={ClassicEditor}
            data="<h4>Deskripsi :</h4><p>&nbsp;</p><h4>Bahan :</h4><p>&nbsp;</p><h4>Cara Memasak :</h4><p>&nbsp;</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default FormAddRecipe;
