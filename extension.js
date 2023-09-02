const vscode = require('vscode');
const child_process = require('child_process');

exports.activate = function(context) {
    console.log("Extension activated");
    
    let disposable = vscode.commands.registerCommand('extension.runMyBashScript', (folder) => {
        console.log("Run My Bash Script command triggered");
        const config = vscode.workspace.getConfiguration('runMyBashScript');
        let scriptPath = config.get('scriptPath');

        if (!scriptPath) {
            vscode.window.showOpenDialog({
                canSelectMany: false,
                filters: {
                    'Bash Scripts': ['sh']
                }
            }).then(fileUri => {
                if (fileUri && fileUri[0]) {
                    scriptPath = fileUri[0].fsPath;
                    config.update('scriptPath', scriptPath, true);
                    promptUserAndRunScript(scriptPath, folder.fsPath);
                }
            });
        } else {
            promptUserAndRunScript(scriptPath, folder.fsPath);
        }
    });

    context.subscriptions.push(disposable);

}

function promptUserAndRunScript(scriptPath, folderPath) {
    vscode.window.showInputBox({ prompt: 'Enter any required inputs for your script separated by commas:' }).then(inputs => {
        if (inputs) {
            const inputArray = inputs.split(',').map(input => input.trim());
            runScript(scriptPath, folderPath, ...inputArray);
        }
    });
}

function runScript(scriptPath, folderPath, ...args) {
    const command = `bash "${scriptPath}" "${folderPath}" ${args.map(arg => `"${arg}"`).join(' ')}`;
    child_process.exec(command, (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Error executing script: ${stderr}`);
        } else {
            vscode.window.showInformationMessage(`Script executed successfully: ${stdout}`);
        }
    });
}
