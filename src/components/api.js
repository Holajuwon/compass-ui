import axios from "axios";

let baseUrl = "https://compassed-api.herokuapp.com/";
let newUrl = `${baseUrl}api/post`;
let comment = `${baseUrl}api/comment`;
const auth_token = process.env.REACT_APP_AUTH_TOKEN;

export const fetchNews = async () => {
  try {
    let res = await axios.get(newUrl);
    let data = await res.data;
    localStorage.setItem("posts", JSON.stringify(data));
    return data;
  } catch (err) {
    throw err;
  }
};

export const createPost = async (post) => {
  try {
    let res = await axios.post(newUrl, post);
    let data = await res.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createComment = async (comments, id) => {
  try {
    let res = await axios.post(comment + `/${id}`, comments);
    let data = await res.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchComment = async (id) => {
  try {
    let res = await axios.get(comment + `/${id}`);
    let data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async (id) => {
  try {
    let res = await axios.delete(comment + `/${id}`);
    let data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const editComment = async (newComment, id) => {
  try {
    let res = await axios.put(comment + `/${id}`, newComment);
    let data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCountries = async () => {
  try {
    let res = await axios.get(
      "https://www.universal-tutorial.com/api/countries/",
      {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      }
    );
    let data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchStates = async (country) => {
  try {
    let res = await axios.get(
      `https://www.universal-tutorial.com/api/states/${country}`,
      {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      }
    );
    let data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async (post) => {
  try {
    let res = await axios.post(
      "https://rhub-api.herokuapp.com/api/signup",
      post
    );
    let data = await res.data;

    return data;
  } catch (err) {
    console.error(err);
  }
};
