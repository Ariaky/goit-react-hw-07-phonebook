import axios from "axios";
import { toast } from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6630049dc92f351c03d8d7aa.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        toast.error(`Sorry, error is occurred`, {
          position: 'top-right',
          theme: 'colored',
        });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', { name, phone });
        return response.data;
      } catch (error) {
        toast.error(`Sorry, error is occurred`, {
          position: 'top-right',
          theme: 'colored',
        });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        toast.error(`Sorry, error is occurred`, {
          position: 'top-right',
          theme: 'colored',
        });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );