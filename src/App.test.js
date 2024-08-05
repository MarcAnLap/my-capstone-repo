import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './component/BookingForm';import { BrowserRouter as Router } from 'react-router-dom'; // Wrap with Router for routing
import Header from './component/Header';

test('renders the Header and checks button link', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Check if the button is present
  const buttonElement = screen.getByRole('button', { name: /Reserve a Table/i });
  expect(buttonElement).toBeInTheDocument();

  // Check if the button links to the correct URL
  const linkElement = screen.getByRole('link', { name: /Reserve a Table/i });
  expect(linkElement).toHaveAttribute('href', '/booking');
});

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Choose date/i);
    expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm heading after form submission', () => {
  render(<BookingForm />);

  // Simulate form submission
  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-08-05' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/Numbers of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByText(/Make the reservation!/i));

  // Check if alert is displayed
  const headingElement = screen.getByText(/Confirmed reservation!/i);
  expect(headingElement).toBeInTheDocument();
});
