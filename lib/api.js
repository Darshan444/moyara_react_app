/* eslint-disable no-console */
import React from 'react';
import axios from "axios";
const API_URL = "http://localhost:3001/v1/";

export async function callPostApiv2(url, body, headers) {
    
  let authHeader = {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "POST",
      data: body,
      timeout: 120000,
      headers: { ...authHeader, ...headers },
    });
    
    return result;
  } catch (error) {
    console.log(error);
    console.log("Post data", JSON.stringify(body));
    throw error;
  }
}

export async function callGetApiv2(url, body, headers) {
  let authHeader = {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "GET",
      data: body,
      timeout: 120000,
      headers: { ...authHeader, ...headers },
    });
    return result;
  } catch (error) {
    console.log(error);
    console.log("Post data", JSON.stringify(body));

    throw error;
  }
}
