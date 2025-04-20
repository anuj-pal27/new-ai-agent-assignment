const { getPlan } = require('./ai');
const { extractCommands, executeCommands } = require('./executor');
const { ask, confirm, close } = require('./utils');

(async () => {
  let task = await ask("🤖 What task should I perform?\n> ");

  while (true) {
    const plan = await getPlan(task);
    console.log("\n🧠 AI Plan:\n" + plan);

    const approved = await confirm("Do you approve this plan?");
    if (approved) {
      const commands = extractCommands(plan);
      executeCommands(commands);
      const success = await ask("\n✅ Was the task successful? (yes/no): ");

      if (success.toLowerCase() === 'yes') {
        console.log("🎉 Task completed successfully!");
        break;
      } else {
        const reason = await ask("❌ What went wrong?\n> ");
        task = `The previous task failed due to: ${reason}. Try again. Original task: ${task}`;
      }
    } else {
      task = await ask("📝 Okay, re-enter the task:\n> ");
    }
  }

  close();
})();
