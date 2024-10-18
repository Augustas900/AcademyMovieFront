// Importing necessary libraries and components from React, React Router, Axios, and Bootstrap
import { useEffect, useRef, useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react';

// Reviews component definition
const Reviews = ({ getMovieData, movie, reviews, setReviews }) => { // Removed 'user' prop, since it's no longer needed
    // Using the useRef hook to create a reference for the review text input
    const revText = useRef();
    
    // Error and success state for form submission feedback
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Extracting movieId from the URL parameters using useParams hook
    let params = useParams();
    const movieId = params.movieId;

    // useEffect hook to fetch movie data when the component is mounted or movieId changes
    useEffect(() => {
        getMovieData(movieId); // Fetch movie data using the passed getMovieData function
    }, [movieId, getMovieData]); // Effect will run whenever movieId or getMovieData changes

    // Function to handle the addition of a new review
    const addReview = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        const rev = revText.current; // Accessing the current value of the review text input

        // Removed the 'user' check here so that anyone can submit a review

        try {
            // Sending a POST request to the API to add a new review
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });

            // Clear the review input and success state after submission
            rev.value = "";
            setSuccess("Review submitted successfully!");
            setError(null); // Clear any previous errors

            // Fetch the updated movie data (which includes the latest reviews)
            getMovieData(movieId);

        } catch (err) {
            setError("Error submitting review. Please try again later.");
            console.error(err); // Logging any errors that occur during the API request
        }
    };

    // Returning JSX to render the component
    return (
        <Container>
            {/* Row to display the heading */}
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            
            {/* Row to display the movie poster and the review form */}
            <Row className="mt-2">
                <Col>
                    {/* Displaying the movie poster */}
                    <img src={movie?.poster} alt={movie?.title} />
                </Col>
                <Col>
                    <>
                        {/* Row for the review form */}
                        <Row>
                            <Col>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {success && <Alert variant="success">{success}</Alert>}
                                
                                {/* Render the review form directly since user authentication is no longer required */}
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                            </Col>
                        </Row>
                        {/* Row for a horizontal line */}
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                    
                    {/* Mapping over the reviews array and rendering each review */}
                    {reviews?.map((r) => (
                        <React.Fragment key={r._id}> {/* Use unique id as key */}
                            {/* Row for the review text */}
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            {/* Row for a horizontal line */}
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>                                
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
            
            {/* Final horizontal line */}
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>        
        </Container>
    );
}

// Exporting the Reviews component for use in other parts of the application
export default Reviews;
