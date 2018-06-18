import React from 'react';

const FormField = props => {
  const { label, type, fieldName, isRequired, value } = props;
  let fieldView, requiredField, requiredAttr, inputStyle;

  if (type === 'textarea') {
    fieldView = (
      <div>
        <h4>{label}</h4>
        <textarea className="form-field" name={fieldName} />
      </div>
    );
  } else {
    inputStyle = type === 'hidden' ? '' : 'form-field';
    if (isRequired) {
      requiredField = <span className="required-asterisk">*</span>;
      requiredAttr = 'required';
    }

    fieldView = (
      <div className={inputStyle}>
        <input
          className="form-control"
          name={fieldName}
          id={label}
          type={type}
          required={isRequired}
          value={value}
        />
        <label for={fieldName}>{label}</label>
        {requiredField}
      </div>
    );
  }

  return <div className="FormField">{fieldView}</div>;
};

export default FormField;
