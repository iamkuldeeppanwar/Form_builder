import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [viewForm, setViewForm] = useState([]);

  useEffect(() => {
    formDatas();
  }, []);

  const formDatas = () => {
    axios
      .get("http://localhost:8000/getForm")
      .then((data) => {
        setViewForm(data.data.formData);
      })
      .catch((error) => {
        window.alert("Something went Wrong!");
      });
  };

  const deleteForm = (id) => {
    axios
      .delete(`http://localhost:8000/deleteForm/${id}`)
      .then((data) => {
        window.alert("Form Deleted!");
        let temp = viewForm.filter((res) => {
          return res._id != id;
        });
        setViewForm(temp);
      })
      .catch((error) => {
        window.alert("Something went Wrong!");
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <div>
          <button className="border m-3 bg-blue-500 rounded text-white p-2">
            <Link to="/create">Create Form +</Link>
          </button>
        </div>
        <div className="relative w-5/6 overflow-x-auto shadow-md sm:rounded-lg">
          {viewForm.length > 0 && (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Forms
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created On
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Questions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    View Forms
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {viewForm.map((data, index) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.title}
                      </th>
                      <td className="px-6 py-4">
                        {data.createdAt.toString().split("T")[0]}
                      </td>
                      <td className="px-6 py-4">{data.fields.length}</td>
                      <td className="px-6 py-4">
                        <button>
                          <Link
                            to={{
                              pathname: "view/" + data._id,
                            }}
                          >
                            View
                          </Link>
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => deleteForm(data._id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
