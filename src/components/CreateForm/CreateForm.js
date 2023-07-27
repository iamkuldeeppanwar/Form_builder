import React from "react";
import { useState } from "react";

function CreateForm() {
  const [type, setType] = useState("text");
  const [placeholder, setPlaceholder] = useState("");
  const [required, setRequired] = useState(false);
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [fields, setFields] = useState([]);

  const addQuestions = (e) => {
    e.preventDefault();
    const form = {
      required,
      placeholder,
      question,
      type,
    };
    setFields((pre) => [...pre, form]);
    setPlaceholder("");
    setQuestion("");
    setType("text");
    setRequired(false);

    console.log(fields);
  };

  const saveForm = () => {
    const newForm = {
      title,
      fields,
    };
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <button className="border">Preview</button>
        <form className="w-5/6 p-3 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <label>Title</label>
          <div className="flex flex-col gap-3">
            <input
              className="border p-3"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Title"
              required
            />
            <label>Question</label>
            <input
              className="border p-3"
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              placeholder="Question"
            />
            <label>Placeholder</label>
            <input
              className="border p-3"
              type="text"
              onChange={(e) => setPlaceholder(e.target.value)}
              value={placeholder}
              placeholder="Enter Placeholder"
            />
          </div>
          <div className="flex gap-3 mt-3">
            <div className="flex flex-col gap-3">
              <label>Type</label>
              <select
                className="border p-3"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="text">text</option>
                <option value="number">number</option>
                <option value="password">password</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label>Required</label>
              <select
                className="border p-3"
                onChange={(e) => setRequired(e.target.value)}
                value={required}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <button
              className="border  w-96 p-3 text-white bg-blue-500 rounded"
              onClick={addQuestions}
            >
              Add Question
            </button>
            <button
              className="border w-96 p-3 text-white bg-blue-500 rounded"
              onClick={saveForm}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateForm;
