import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([]);

  useEffect(() => {
    viewSaveForm();
  }, []);

  const viewSaveForm = () => {
    axios
      .get(`http://localhost:8000/getSingleForm/${params.id}`)
      .then((data) => {
        setTitle(data.data.formData.title);
        setFields(data.data.formData.fields);
      })
      .catch((err) => {
        window.alert("Something went wrong");
      });
  };

  const saveForm = (e) => {
    e.preventDefault();
    window.alert("Form submited Successfully");
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-5">
      <form
        onSubmit={saveForm}
        className="w-3/6 p-3 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
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
                defaultValue={data.answers}
                placeholder={data.placeholder}
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
            Submit Form
          </button>
        </p>
      </form>
    </div>
  );
}

export default ViewForm;
