import React from 'react'

const Form = ({ onChange, formData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input required name="username" type="text" value={formData.username} onChange={onChange} placeholder="username" />
      <input required name="email" type="email" value={formData.email} onChange={onChange} placeholder="email"/>
      <input required name="website" type="url" value={formData.website} onChange={onChange} placeholder="website" />
      <input required name="city" type="text" value={formData.address?.city} onChange={onChange} placeholder="city"/>
      <input value="Submit Form" type="submit" />
    </form>
  )
}

export default Form