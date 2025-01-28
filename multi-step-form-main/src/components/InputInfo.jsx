import PropTypes from 'prop-types';
const InputInfo = ({
  label,
  inputType,
  placeholder,
  value,
  error,
  handleChange,
}) => {
  if (inputType === 'text') {
    return (
      <div className="input__info">
        <label>{label}</label>
        {error && value.length == 0 && (
          <div className="input__info--error">This field is required</div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          style={
            error && value.length === 0
              ? { borderColor: 'var(--strawberry-red)' }
              : null
          }
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  }

  if (inputType === 'email') {
    return (
      <div className="input__info">
        <label>{label}</label>
        {error && value.length === 0 && (
          <div className="input__info--error">This field is required</div>
        )}
        <input
          type="email"
          placeholder={placeholder}
          value={value}
          style={
            error && value.length === 0
              ? { borderColor: 'var(--strawberry-red)' }
              : null
          }
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  }

  if (inputType === 'tel') {
    return (
      <div className="input__info">
        <label>{label}</label>
        {error && value.length === 0 && (
          <div className="input__info--error">This field is required</div>
        )}
        <input
          type="tel"
          placeholder={placeholder}
          style={
            error && value.length === 0
              ? { borderColor: 'var(--strawberry-red)' }
              : null
          }
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  }
};

export default InputInfo;

InputInfo.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
