console.log("Main TypeScript file initialized for Warlord12398 site");

function displayToolInfo(name: string, description: string, url: string): void {
  const container = document.createElement('div');
  container.className = 'tool';

  container.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <a href="${url}" target="_blank">View Tool</a>
  `;

  document.body.querySelector('section')?.appendChild(container);
}

displayToolInfo(
  'Warlord Nuker',
  'The ultimate tool to dominate Discord servers: mass-ban, wipe channels, spam webhooks, grant admin, and more.',
  'https://github.com/Warlord12398/Warlord-Nuker'
);
