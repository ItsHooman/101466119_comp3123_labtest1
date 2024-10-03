const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');
function createLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdir(logsDir, (err) => {
            if (err) throw err;
            console.log('Logs directory created');
        });
    }
    process.chdir(logsDir);
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDir, fileName);
        fs.writeFile(filePath, `This is log file ${i}`, (err) => {
            if (err) throw err;
            console.log(`Created file: ${fileName}`);
        });
    }
}
createLogs();
