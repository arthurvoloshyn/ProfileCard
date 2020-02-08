import React, { Component } from 'react';

import Edit from '../components/Edit';
import ImgUpload from '../components/ImgUpload';
import Field from '../components/Field';
import Profile from '../components/Profile';

import profile from '../img/profile.jpg';

class CardProfile extends Component {
  state = {
    file: '',
    imagePreviewUrl: profile,
    name: '',
    status: '',
    active: 'edit'
  };

  photoUpload = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        this.setState({
          file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  };

  edit = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(({ active }) => ({
      active: active === 'edit' ? 'profile' : 'edit'
    }));
  };

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;

    return (
      <div>
        {active === 'edit' ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />

            <Field onChange={this.edit} value={name} type="name" placeholder="Alexa" maxlength={25} />

            <Field onChange={this.edit} value={status} type="status" placeholder="It's a nice day!" maxlength={35} />
          </Edit>
        ) : (
          <Profile onSubmit={this.handleSubmit} src={imagePreviewUrl} name={name} status={status} />
        )}
      </div>
    );
  }
}

export default CardProfile;
