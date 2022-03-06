import { callPostApiv2, callGetApiv2 } from "./api";

export async function getExhibitionList(data) {
  try {
    const response = await callPostApiv2(`exhibition`, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getExhibitionDetailById(id) {
  try {
    const response = await callGetApiv2(`exhibition/`+id);
    return response;
  } catch (error) {
    throw error;
  }
}