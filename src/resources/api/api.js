import axios from 'axios';

const API_URL = 'https://api4.wisenrise.com';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchClassrooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/classrooms`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching classrooms:', error);
    throw error;
  }
};

export const fetchMostViewedClassrooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/classrooms/most-viewed`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching most viewed classrooms:', error);
    throw error;
  }
};

export const fetchPopularTeachers = async () => {
  try {
    const response = await axios.get(`${API_URL}/teachers/popular`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching popular teachers:', error);
    throw error;
  }
};