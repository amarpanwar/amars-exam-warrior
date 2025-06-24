fetch('gk.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('question-container');
    data.forEach((q, index) => {
      const div = document.createElement('div');
      div.className = 'question-block';
      div.innerHTML = `
        <h3>${index + 1}. ${q.question}</h3>
        <ul>
          <li>A. ${q.options.A}</li>
          <li>B. ${q.options.B}</li>
          <li>C. ${q.options.C}</li>
          <li>D. ${q.options.D}</li>
        </ul>
        <p><strong>सही उत्तर:</strong> ${q.answer}</p>
        <hr>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error loading GK questions:', error));
