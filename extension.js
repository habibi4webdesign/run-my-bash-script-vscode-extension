const vscode = require("vscode");
const child_process = require("child_process");
const fs = require("fs");
exports.activate = function (context) {
  console.log("Extension activated");

  let disposable = vscode.commands.registerCommand(
    "extension.runMyBashScript",
    (folder) => {
      console.log("Run My Bash Script command triggered");
      const config = vscode.workspace.getConfiguration("runMyBashScript");
      let scriptPath = config.get("scriptPath");

      if (!scriptPath) {
        vscode.window
          .showOpenDialog({
            canSelectMany: false,
            filters: {
              "Bash Scripts": ["sh"],
            },
          })
          .then((fileUri) => {
            if (fileUri && fileUri[0]) {
              scriptPath = fileUri[0].fsPath;
              config.update("scriptPath", scriptPath, true);
              promptUserAndRunScript(scriptPath, folder.fsPath);
            }
          });
      } else {
        promptUserAndRunScript(scriptPath, folder.fsPath);
      }
    }
  );

  context.subscriptions.push(disposable);
};

function promptUserAndRunScript(scriptPath, folderPath) {
  fs.readFile(scriptPath, "utf8", (err, data) => {
    if (err) {
      vscode.window.showErrorMessage(`Error reading script: ${err.message}`);
      return;
    }

    const params = extractParameters(data);
    collectInputs(params).then((inputs) => {
      if (inputs !== undefined) {
        // <-- Modified this line
        runScript(scriptPath, folderPath, ...inputs);
      }
    });
  });
}

function extractParameters(scriptContent) {
  const regex = /\$([a-zA-Z_][a-zA-Z0-9_]*)/g;
  const params = [];
  let match;
  while ((match = regex.exec(scriptContent)) !== null) {
    if (params.indexOf(match[1]) === -1 && match[1] !== "DIR_PATH") {
      params.push(match[1]);
    }
  }
  return params;
}

async function collectInputs(params) {
  const inputs = [];
  for (const param of params) {
    const input = await vscode.window.showInputBox({
      prompt: `Enter value for ${param}:`,
    });
    if (input === undefined) {
      return; // User cancelled the input
    }
    inputs.push(input);
  }
  return inputs;
}
function runScript(scriptPath, folderPath, ...args) {
  const command = `bash "${scriptPath}" "${folderPath}" ${args
    .map((arg) => `"${arg}"`)
    .join(" ")}`;
  child_process.exec(command, (error, stdout, stderr) => {
    if (error) {
      vscode.window.showErrorMessage(`Error executing script: ${stderr}`);
    } else {
      vscode.window.showInformationMessage(
        `Script executed successfully: ${stdout}`
      );
    }
  });
}
