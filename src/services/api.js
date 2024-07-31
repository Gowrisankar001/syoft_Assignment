// This file can contain reusable functions for API calls, if needed.

export const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  