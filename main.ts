body { font-family: 'Segoe UI', sans-serif; background: #0f0f0f; color: #fff; overflow-x: hidden; margin: 0; }

header { text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, #1a1a1a, #0a0a0a); animation: float 6s ease-in-out infinite; box-shadow: 0 0 20px #ff004f; }

header h1 { font-size: 3rem; color: #ff004f; text-shadow: 0 0 20px #ff004f, 0 0 30px #ff004f; }

header p { font-size: 1.2rem; color: #ddd; }

header a { display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: #ff004f; color: white; border-radius: 8px; text-decoration: none; transition: 0.3s ease; box-shadow: 0 0 10px #ff004f; }

header a:hover { background: #e60045; box-shadow: 0 0 20px #ff004f, 0 0 30px #ff004f; transform: scale(1.05); }

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

section { padding: 3rem 2rem; text-align: center; }

section h2 { color: #ff004f; text-shadow: 0 0 10px #ff004f, 0 0 20px #ff004f; margin-bottom: 2rem; }

.tool { background: #1a1a1a; margin: 2rem auto; max-width: 600px; border-left: 5px solid #ff004f; border-radius: 12px; box-shadow: 0 0 25px #ff004f40; padding: 2rem; transition: transform 0.3s ease, box-shadow 0.3s ease; position: relative; }

.tool::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background: linear-gradient(45deg, #ff004f, #ff004f40); z-index: -1; border-radius: 15px; opacity: 0.2; filter: blur(10px); transition: opacity 0.3s; }

.tool:hover::before { opacity: 0.6; }

.tool:hover { transform: scale(1.02); box-shadow: 0 0 40px #ff004f80; }

.tool h3 { color: #ff004f; margin-bottom: 1rem; text-shadow: 0 0 10px #ff004f; }

.tool p { color: #ccc; }

.tool a { margin-top: 1rem; display: inline-block; background: #ff004f; padding: 0.5rem 1.2rem; border-radius: 6px; color: white; text-decoration: none; transition: background 0.3s, transform 0.3s; box-shadow: 0 0 10px #ff004f; }

.tool a:hover { background: #e60045; transform: scale(1.05); box-shadow: 0 0 25px #ff004f; }

footer { text-align: center; padding: 2rem; background: #0a0a0a; color: #666; border-top: 1px solid #222; box-shadow: 0 -2px 20px #ff004f20; }

