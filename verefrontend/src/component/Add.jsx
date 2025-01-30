import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    poster: '',
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.title && formData.price && formData.category && formData.poster){
      console.log('Form data submitted:', formData);
    setFormData({
      title: '',
      price: '',
      category: '',
      poster: '',
    });
    navigate('/');
  };
}

  return (
    <div>
    <Box sx={{ display: 'flex', mt: 25, justifyContent:'center' }}>
      <Navbar/>
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '500px' }}>
          <TextField
            label="Product Name"
            name="title"
            value={formData.title}
            onChange={handleChange}
            
            variant="outlined"
            required
            size='medium'
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' }, sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
            },}}
          TextField/>
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            variant="outlined"
            required
            size='medium'
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' }, sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
            },}}
          />
          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            variant="outlined"
            required
            size='medium'
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' }, sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
            },}}
          />
          <TextField
            label="Poster Link"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            variant="outlined"
            required
            size='medium'
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' }, sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
            },}}
          />
          <Button style={{fontFamily:'fantasy',fontSize:'20px'}} type="submit" variant="contained" color="warning" >
            ADD
          </Button>
        </Box>
      </form>
    </Box>
    </div>
  );
};

export default Add
