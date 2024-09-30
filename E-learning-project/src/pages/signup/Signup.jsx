import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function SignUp() {
  return (
    <Container className="form-container mt-5 p-4">
      <h1 className="text-center">Hello!</h1>
      <h2 className="text-center">Please Sign Up</h2>

      <Form>
        
        {/* Profile Picture Upload (Optional) */}
        <Form.Group className="mb-3" controlId="formProfilePicture">
          <Form.Label>Upload Profile Picture (Optional)</Form.Label>
          <Form.Control type="file" accept="image/*" className="input-field"/>
        </Form.Group>

        {/* Full Name */}
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="Enter Your First Name"
            className="input-field"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Enter Your Last Name"
            className="input-field"
            required
          />
        </Form.Group>

        {/* Email Address */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Enter Your Email Address"
            className="input-field"
            required
          />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            required
          />
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Your Password"
            className="input-field"
            required
          />
        </Form.Group>

        {/* User Role Selection */}
        <Form.Group className="mb-3 d-flex justify-content-around">
          <Form.Check type="radio" label="Student" name="role" />
          <Form.Check type="radio" label="Teacher" name="role" />
        </Form.Group>

        {/* Phone Number (Optional) */}
        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Control
            type="tel"
            placeholder="Enter Your Phone Number (Optional)"
            className="input-field"
          />
        </Form.Group>

        {/* Date of Birth (Optional) */}
        <Form.Group className="mb-3" controlId="formDateOfBirth">
          <Form.Label>Date of Birth (Optional)</Form.Label>
          <Form.Control type="date" className="input-field" required/>
        </Form.Group>

        {/* Country or Location */}
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>Select Your Country</Form.Label>
          <Form.Control as="select" className="input-field" required>
            <option value="">Select Country</option>
            <option value="EG">Egypt</option>
            <option value="US">USA</option>
            <option value="CA">Canada</option>
          </Form.Control>
        </Form.Group>

        {/* Preferred Language */}
        <Form.Group className="mb-3" controlId="formLanguage">
          <Form.Label>Preferred Language</Form.Label>
          <Form.Control as="select" className="input-field" required>
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </Form.Control>
        </Form.Group>

        {/* Educational Background (Optional) */}
        <Form.Group className="mb-3" controlId="formEducation">
          <Form.Control
            type="text"
            placeholder="Enter Your Highest Degree Achieved (Optional)"
            className="input-field"
          />
        </Form.Group>

        {/* Areas of Interest (Optional) */}
        <Form.Group className="mb-3" controlId="formInterests">
          <Form.Label>Areas of Interest (Optional)</Form.Label>
          <Form.Control as="select" multiple className="input-field">
            <option value="dm">Digital Marketing</option>
            <option value="wd">Web Development</option>
            <option value="md">Mobile Development</option>
          </Form.Control>
        </Form.Group>

        {/* Terms and Conditions Agreement */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms of Service and Privacy Policy"
            required
          />
        </Form.Group>

        {/* Newsletter Subscription (Optional) */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Subscribe to our newsletter (Optional)"
          />
        </Form.Group>

        {/* Submit Button */}
        <div className="d-grid">
          <Button variant="primary" type="submit" className="SignUp-button">
            Sign Up
          </Button>
        </div>
      </Form>
    </Container>
  );
}