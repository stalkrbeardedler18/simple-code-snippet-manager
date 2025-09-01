document.getElementById('save-snippet').addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const code = document.getElementById('code').value;
    const language = document.getElementById('language').value;

    const response = await fetch('/snippet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, code, language })
    });

    const savedSnippet = await response.json();
    // Update the UI with the new snippet
    const ul = document.getElementById('snippets');
    ul.innerHTML += `<li>${savedSnippet.title} (${savedSnippet.language})</li>`;
});