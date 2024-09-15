import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, TextField, Box, Typography, IconButton } from '@mui/material';
import { MdAddComment } from 'react-icons/md'; // Import the MdAddComment icon
import './Faq.css';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [open, setOpen] = useState(false);
  const [newFaq, setNewFaq] = useState({
    title: '',
    question: '',
    answer: '',
    imgSrc: ''
  });
  const [errors, setErrors] = useState({
    title: '',
    question: '',
    answer: '',
    imgSrc: ''
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/faqs')
      .then(response => setFaqs(response.data))
      .catch(error => {
        console.error('Error fetching FAQs:', error);
        toast.error('Error fetching FAQs');
      });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrors({
      title: '',
      question: '',
      answer: '',
      imgSrc: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!newFaq.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!newFaq.question.trim()) {
      newErrors.question = 'Question is required';
      isValid = false;
    }

    if (!newFaq.answer.trim()) {
      newErrors.answer = 'Answer is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    axios.post('http://127.0.0.1:5000/faqs', newFaq)
      .then(response => {
        setFaqs(prevFaqs => [...prevFaqs, response.data]);
        handleClose();
        toast.success('FAQ added successfully');
      })
      .catch(error => {
        console.error('Error adding FAQ:', error);
        toast.error('Error adding FAQ');
      });
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FaQ Section</h2>
      {faqs.map((faq) => (
        <div className="faq-card" key={faq.id}>
          <div className='img-tan'>
            <img src={faq.imgSrc} alt="faq" className="faq-image" />
            <p className="faq-title-text">{faq.title}</p>
          </div>
          <div className="faq-content">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        </div>
      ))}
      <div className="icon-button-container">
        <IconButton 
          color="primary" 
          onClick={handleOpen}
          sx={{ 
            backgroundColor: 'white', 
            boxShadow: 3,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }
          }}
        >
          <MdAddComment size={35} /> {/* Use MdAddComment from react-icons */}
        </IconButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Add New FAQ
          </Typography>
          <TextField
            label="Title"
            name="title"
            value={newFaq.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.title)}
            helperText={errors.title}
          />
          <TextField
            label="Question"
            name="question"
            value={newFaq.question}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.question)}
            helperText={errors.question}
          />
          <TextField
            label="Answer"
            name="answer"
            value={newFaq.answer}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.answer)}
            helperText={errors.answer}
          />
          <TextField
            label="Image URL"
            name="imgSrc"
            value={newFaq.imgSrc}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            // No error or helperText for imgSrc
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
      <ToastContainer /> {/* Add ToastContainer to the component */}
    </div>
  );
};

export default Faq;
