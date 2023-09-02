const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.runBashScript', function (folder) {
        // Accessing the configuration for the script path
        const userConfiguredScriptPath = vscode.workspace.getConfiguration('myExtension').get('scriptPath');

        // Get the root path of the currently opened project
        const rootFolder = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

        // If the user hasn't configured a script path, use the default Script.sh in the root of the current project
        const defaultScriptPath = rootFolder ? path.join(rootFolder, 'Script.sh') : undefined;

        // Use the user-configured path if available, otherwise use the default path
        const scriptPath = userConfiguredScriptPath || defaultScriptPath;

        const folderPath = folder.fsPath;

        // Execute the script with the provided folder path
        exec(`bash "${scriptPath}" "${folderPath}"`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error running script: ${error.message}`);
                return;
            }
            vscode.window.showInformationMessage(stdout);
        });
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

exports.deactivate = deactivate;
