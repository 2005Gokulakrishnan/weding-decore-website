fetch('./content/homepage.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('File not found');
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('hero-title').textContent = data.hero_title;
    document.getElementById('hero-description').textContent = data.hero_description;
    document.getElementById('hero-button').textContent = data.hero_button_text;
  })
  .catch(error => console.error('Error:', error));