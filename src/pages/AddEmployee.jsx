import Button from '../components/Button';
import { useState } from 'react';

function AddEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!department) {
      newErrors.department = 'Please select a department.';
    }

    if (!employmentType) {
      newErrors.employmentType = 'Please select an employment type.';
    }

    if (!startDate) {
      newErrors.startDate = 'Please select a start date.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    console.log('Submitted:', { name, email, department, employmentType, startDate, photo });
    setSubmitted(true);
    setName('');
    setEmail('');
    setDepartment('');
    setEmploymentType('');
    setStartDate('');
    setPhoto(null);
  };

  return (
    <div className="form-container">
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select a department</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="hr">HR</option>
          </select>
          {errors.department && <span className="error-message">{errors.department}</span>}
        </div>

        <div className="form-group">
          <label>Employment Type</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="employmentType"
                value="full-time"
                checked={employmentType === 'full-time'}
                onChange={(e) => setEmploymentType(e.target.value)}
              />
              Full-time
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="employmentType"
                value="part-time"
                checked={employmentType === 'part-time'}
                onChange={(e) => setEmploymentType(e.target.value)}
              />
              Part-time
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="employmentType"
                value="contract"
                checked={employmentType === 'contract'}
                onChange={(e) => setEmploymentType(e.target.value)}
              />
              Contract
            </label>
          </div>
          {errors.employmentType && <span className="error-message">{errors.employmentType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          {errors.startDate && <span className="error-message">{errors.startDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="photo">Profile Photo (optional)</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        <Button type="submit" variant="primary" size="medium">Add Employee</Button>
      </form>

      {submitted && <p className="success-message">Employee added successfully!</p>}
    </div>
  );
}

export default AddEmployee;