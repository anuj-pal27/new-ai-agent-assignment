const { execSync } = require('child_process');
   

function extractCommands(planText) {
    const lines = planText
      .split('\n')
      .filter(line =>
        line.trim().match(/^\d+\.\s/) || line.trim().startsWith('$')
      );

    return lines.map(line =>
      line.replace(/^\d+\.\s/, '').replace(/^\$/, '').trim()
    );
}

function executeCommands(commands) {
    for (const cmd of commands) {
        console.log(`\n🚀 Executing command: ${cmd}`);
        try {
            const output = execSync(cmd, { encoding: 'utf-8' });
            console.log(`✅ Output:\n${output}`);
        } catch (error) {
            console.error(`❌ Error:\n${error.stderr?.toString() || error.message}`);
        }
    }
}


module.exports = { extractCommands, executeCommands };