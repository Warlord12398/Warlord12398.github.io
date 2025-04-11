interface Tool {
  name: string;
  description: string;
  action?: () => void;
}

const tools: Tool[] = [
  {
    name: "Warlord Nuker",
    description: "A devastating Discord nuker that wipes everything: channels, roles, and floods webhooks.",
    action: () => {
      alert("Tool Launched: Warlord Nuker"); // Placeholder action
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
      <button style="margin-top: 10px; padding: 0.5rem 1rem; background: #ff004f; border: none; border-radius: 0.4rem; color: white; cursor: pointer;">
        Launch
      </button>
    `;

    const button = div.querySelector("button");
    button?.addEventListener("click", tool.action);

    container.appendChild(div);
  });
}

displayTools();
