require('dotenv').config();
const axios = require('axios');

async function getPlan(task) {
    const prompt = `
    You are an AI agent that outputs only shell commands.
    
    Given a task, respond ONLY with the exact shell commands needed to perform the task, in order, and nothing else.
    
    The task is: "${task}"
    `;
    

  const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }]
  }, {
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    }
  });

  return response.data.choices[0].message.content;
}

module.exports = { getPlan };
