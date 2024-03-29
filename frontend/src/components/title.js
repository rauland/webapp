import { useState, useEffect } from 'react';

function Today() {
  const [headerText, setHeaderText] = useState("XXXX/XX/XX");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${process.env.REACT_APP_BACKEND_URL}/`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setHeaderText(data.current_date);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return <h1 class="element">{headerText}</h1>;
}

export default Today;