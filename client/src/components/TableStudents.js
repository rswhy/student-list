import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents, removeStudent } from "../store/actions/studentAction";
import { useNavigate } from "react-router-dom";

function TableStudents() {
  const dispatch = useDispatch();

  const { students } = useSelector((state) => {
    return state.students;
  });


  const handleDelete = (id) => {
    dispatch(removeStudent(id));
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className="w-full mr-28">
      <br></br>
    
      <br></br><br></br>
      <table className="w-full table-auto">
        <thead className="justify-between w-full">
          <tr className="bg-rose-300">
            <th className="px-16 py-2">
              <span className="text-gray-500">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-500">Phone Number</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-500">Address</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-500">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {students.map((e) => (
            <tr key={e.id} className="bg-white border-4 border-gray-200">
              <td>
                <span className="text-center ml-2 font-semibold">
                  {e.name}
                </span>
              </td>
              <td>
                <span className="text-center ml-2 font-semibold">
                  {e.phone}
                </span>
              </td>
              <td>
                <span className="text-center ml-2 font-semibold">
                  {e.address}
                </span>
              </td>

              <td className="pr-10 py-2">
                <button
                  onClick={() => handleDelete(e.id)}
                  className="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-red-500 hover:text-black "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableStudents;
