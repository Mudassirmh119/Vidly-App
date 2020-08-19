import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

/*   
   'autoFocus'  this attribute is used to focus an input in a form.
    ref={this.username}  by using 'ref' attribute we can worl on DOM element in react.
    ...rest operator is used to get the other properties from the props object
    onChange={onChange}
    value={value}
    type={type}
    instead of using above three attribute we used ...rest operator because their value and attribute names are same.
*/
