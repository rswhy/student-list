import { FETCH_STUDENTS_DATA } from "./actionType";
import { useNavigate } from "react-router-dom";

export const studentsFetchSuccess = function (payload) {
  return {
    type: FETCH_STUDENTS_DATA,
    payload,
  };
};

export const fetchStudents = function () {
  return async (dispatch) => {
    let fetchUrl = "http://localhost:3001/students"
    fetch(`${fetchUrl}`)
      .then((res) => {
        if (!res.ok) {
          console.log(res.statusText);
        }
        return res.json()
      })
      .then((data) => {
        return dispatch(studentsFetchSuccess(data));
      });
  };
};

export const addStudents = function (payload) {
  return (dispatch) => {
    fetch("http://localhost:3001/students", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res.statusText);
        }
        return res.json()
      })
      .then((data) => {
        let navigate = useNavigate();
        navigate("/");
        return dispatch(fetchStudents(data)
      )});
  };
};

export const removeStudent = (payload) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/students/${payload}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (!response.ok) {
        console.log(response.statusText)
      }
      return response.json();
    })
      .then(() => {
        dispatch(fetchStudents());
      });
  };
};


