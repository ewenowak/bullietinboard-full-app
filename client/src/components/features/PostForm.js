import React from 'react';

import { Form, Button, ListGroup, Card, Image } from 'react-bootstrap';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getLoggedUser } from '../../redux/usersReducer';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({action, actionText, isEdit, isAdd, ...props}) => {
    const userLogged = useSelector(state => getLoggedUser(state));
  const {
    register,
    handleSubmit: validate,
    formState: {errors},
  } = useForm();
  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(props.description || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [price, setPrice] = useState(props.price || '');
  const [location, setLocation] = useState(props.location || '');
  const [publishedDateError, setPublishedDateError] = useState(false);
  const [actualizationDate, setActualizationDate] = useState(props.actualizationDate || new Date());
  const [actualizationDateError, setActualizationDateError] = useState(false);
  const onSubmit = () => {
    setPublishedDateError(!publishedDate);
    setActualizationDate(!actualizationDate);
    if (publishedDate) {
      action({title, description, publishedDate, price, location });
    }
  };

  return (
    <div>
      <Form onSubmit={validate(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control {...register('title', {required: true, minLength: 10, maxLength: 50})} value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
          {errors.title && <small className="d-block form-text text-danger mt-1">This field is required and need min 10 and max 50 characters</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control {...register('description', {required: true, minLength: 20, maxLength: 1000})} value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Enter Description" />
          {errors.description && <small className="d-block form-text text-danger mt-1">This field is required and need min 20 and max 1000 characters</small>}
        </Form.Group>
        {isAdd &&
          <Form.Group className="mb-3">
            <Form.Label>Publication Date </Form.Label>
            <DatePicker className="border border-1" date={publishedDate} format={'MM-DD-YYYY'} showBorder onChange={date => setPublishedDate(new Date(date))} placeholder={'Select date'} />
            {publishedDateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
          </Form.Group>
        }
        {isEdit &&
          <Form.Group className="mb-3">
            <Form.Label>Actualization Date </Form.Label>
            <DatePicker className="border border-1" date={actualizationDate} format={'MM-DD-YYYY'} showBorder onChange={date => setActualizationDate(new Date(date))} placeholder={'Select date'} />
            {actualizationDateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
          </Form.Group>
        } 
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control {...register('price', {required: true})} value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder="Enter price" />
          {errors.price && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control {...register('location', {required: true})} value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder="Enter location" />
          {errors.location && <small className="d-block form-text text-danger mt-1">This field is required</small>}
        </Form.Group>
        <ListGroup.Item><b>Seller:</b>
                    <Card border="light" className="text-center" style={{ width: '40rem' }}>
                        <Image roundedCircle variant="top" style={{ width: '10rem', height: '10rem'}} src={userLogged.avatar} />
                        <Card.Body>
                            <Card.Title>{userLogged.login }</Card.Title>
                            <Card.Text>{ userLogged.phone }</Card.Text>
                        </Card.Body>
                    </Card>
          </ListGroup.Item>
        <Button variant="success" type="submit">
          {actionText}
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;