import { message } from "antd";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import { DISMISS_LOADING } from "../redux/store/action-types/loading";
// import { history } from "../utilities";

const renderHeaders = async (uploadFile) => {
  return {
    "Content-Type": uploadFile ? "multipart/form-data" : "application/json",
  };
};

const Get = async (path, responseType) => {
  const headers = await renderHeaders();
  const promise = new Promise((resolve, reject) => {
    axios({
      method: "get",
      baseURL: `${process.env.REACT_APP_API_URL}`,
      url: `${path}`,
      headers,
      responseType,
    })
      .then((res) => {
        // console.log("res: ", res);
        resolve(res);
      })
      .catch((err) => {
        // console.log("err: ", err);
        resolve(err);
      });
  });
  return promise;
};

const Post = async (path, request, uploadFile) => {
  const headers = await renderHeaders(uploadFile);
  const promise = new Promise((resolve, reject) => {
    axios({
      method: "post",
      baseURL: `${process.env.REACT_APP_API_URL}`,
      url: `${path}`,
      data: request,
      headers,
    })
      .then((res) => {
        // console.log("res: ", res);
        resolve(res);
      })
      .catch((err) => {
        // console.log("err: ", err);
        resolve(err);
      });
  });
  return promise;
};

const Put = async (path, request) => {
  const headers = await renderHeaders();
  const promise = new Promise((resolve, reject) => {
    axios({
      method: "put",
      baseURL: `${process.env.REACT_APP_API_URL}`,
      url: `${path}`,
      data: request,
      headers,
    })
      .then((res) => {
        // console.log("res: ", res);
        resolve(res);
      })
      .catch((err) => {
        // console.log("err: ", err);
        resolve(err);
      });
  });
  return promise;
};

const Delete = async (path, request) => {
  const headers = await renderHeaders();
  const promise = new Promise((resolve, reject) => {
    axios({
      method: "delete",
      baseURL: `${process.env.REACT_APP_API_URL}`,
      url: `${path}`,
      data: request,
      headers,
    })
      .then((res) => {
        // console.log("res: ", res);
        resolve(res);
      })
      .catch((err) => {
        // console.log("err: ", err);
        resolve(err);
      });
  });
  return promise;
};

const Services = {
  Get,
  Post,
  Put,
  Delete,
};

export default Services;
