import React, { createContext, useState } from 'react';
import './App.css';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
  status: boolean;
}

// Create a context for the feedback form
const FeedbackFormContext = createContext<FormData | null>(null);

function App() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rating, setRating] = useState<number>(0.0);
  const [feedback, setFeedback] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);

  const feedbackForm = {
    name,
    email,
    rating,
    feedback,
    status,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.length > 2 && email.length > 5 && feedback.length > 10) {
      setStatus(true);

      confirm(`
      your name is ${name}
      your email is ${email}
      your given rating is ${rating}
      your given feedback  is ${feedback}
      `);
    } else {
      alert('Please fill the entire form!');
    }
  };

  return (
    <FeedbackFormContext.Provider value={feedbackForm}>
      <div>
        {!status ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              placeholder="Rating (0-5)"
            />
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Feedback"
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <Summary />
        )}
      </div>
    </FeedbackFormContext.Provider>
  );
}

// Summary component to display the data
const Summary = () => {
  const feedbackForm = React.useContext(FeedbackFormContext);

  return (
    <div>
      <h2>Form Summary</h2>
      {feedbackForm && (
        <>
          <p><strong>Name:</strong> {feedbackForm.name}</p>
          <p><strong>Email:</strong> {feedbackForm.email}</p>
          <p><strong>Rating:</strong> {feedbackForm.rating}</p>
          <p><strong>Feedback:</strong> {feedbackForm.feedback}</p>
        </>
      )}
    </div>
  );
};

export default App;
