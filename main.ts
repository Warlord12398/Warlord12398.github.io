interface Tool {
  name: string;
  description: string;
  action?: () => void;
}

const tools: Tool[] = [
  {
    name: "Warlord Nuker",
    description: "A powerful tool that nukes Discord servers with speed and chaos.",
    action: () => {
      alert("Warlord Nuker Activated! (demo mode)");
    }
  },
  {
    name: "Admin Grant",
    description: "Grants full administrator privileges to a selected user.",
    action: () => {
      alert("Admin Granted! (demo mode)");
    }
  }
];

function displayTools() {
  const container = document.getElementById("tool-list");
  if (!container) return;

  tools.forEach(tool => {
    const div = document.createElement("div");
    div.className = "tool";
    div.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <button>Launch</button>
    `;
    const button = div.querySelector("button");
    button?.addEventListener("click", tool.action);
    container.appendChild(div);
  });
}

displayTools();
