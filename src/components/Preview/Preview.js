import React, { useState } from "react";
import axios from "axios";

function Preview({ fields, title, setTitle, setFields, setPreview }) {
  const [arr, setArr] = useState([]);

  const saveForm = (e) => {
    e.preventDefault();
    const temp = fields;
    for (let i in temp) {
      temp[i].answers = arr[i];
    }
    const body = { fields: temp, title };
    axios
      .post("https://form-api-bafu.onrender.com/forms", body)
      .then((data) => {
        window.alert("Form Created Successfully!");
        setPreview(false);
        setFields([]);
        setTitle("");
      })
      .catch((err) => {
        window.alert("Something went wrong");
      });
  };

  const handleInput = (e, i) => {
    const temp = arr;
    arr[i] = e.target.value;
    setArr(temp);
  };

  return (
    <form
      onSubmit={saveForm}
      className="w-5/6 p-3 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
    >
      <p className="font-normal text-center text-blue-500 text-[2rem]">
        {title}
      </p>
      {fields.map((data, i) => {
        return (
          <div key={i} className="flex flex-col gap-3">
            <label>
              {data.question}{" "}
              <span className="text-[red]">{data.required ? "*" : ""}</span>
            </label>
            <input
              autoComplete="new-password"
              className="border p-3 mb-3"
              type={data.type}
              placeholder={data.placeholder}
              onChange={(e) => handleInput(e, i)}
              {...(data.required ? { required: "required" } : {})}
            />
          </div>
        );
      })}
      <p className="text-center">
        <button
          type="submit"
          className="hover:opacity-90 border w-64 py-3 text-white bg-blue-500 rounded"
        >
          Create Form
        </button>
      </p>
    </form>
  );
}

export default Preview;
