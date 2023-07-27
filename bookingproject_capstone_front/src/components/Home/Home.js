import React from 'react'

function Home() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/booking', {
      state: {
        origin,
        destination,
        preferredDate,
        returnDate,
      },
    });
  };

  return (
    <div>Home</div>
  )
}

export default Home