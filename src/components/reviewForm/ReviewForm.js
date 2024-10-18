import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    // The form element handles form submission with the `onSubmit` event.
    <Form onSubmit={handleSubmit}> 
      
      {/* Form Group for handling the textarea input */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        {/* Label for the textarea, using the labelText prop */}
        <Form.Label>{labelText}</Form.Label>

        {/* Textarea input where the user writes the review. 
            `ref={revText}` is used to capture the input value from the form. 
            `defaultValue` can be used for pre-filled content in the textarea. */}
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>

      {/* Submit button that triggers the form's submission. 
          The type is set to "submit", so it works with the form's onSubmit event */}
      <Button variant="outline-info" type="submit">
        Submit
      </Button>
      
    </Form>
  );
}

export default ReviewForm;
