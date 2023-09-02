# Run Bash Script Extension

Welcome to the "Run Bash Script" extension for Visual Studio Code! This extension offers a seamless way to execute bash scripts directly within the editor. Whether you're working with a custom script or just need to run a quick bash command, this extension is here to assist.

![Right click on any folder to run the bash script](https://raw.githubusercontent.com/habibi4webdesign/run-my-bash-script-vscode-extension/main/images/Screenshot1.png)

## Features

- **User-Friendly Interface**: Run bash scripts without the need to toggle between the terminal and the editor.
- **Intuitive Input Handling**: The extension now prompts you for each parameter in your script, making it easier to understand what each input is for.
- **Custom Script Path**: Set a default script to run every time you use the extension. You can also override the previously selected script with the `overrideBashScript` command.

### How to Use

1. Navigate to your desired folder within the Visual Studio Code workspace.
2. Right-click on the folder.
3. Select "Run My Bash Script" from the context menu.
4. If prompted, choose your bash script.
5. The extension will ask for each parameter your script requires. Provide the necessary inputs when prompted.

![It asks you to enter the path to the bash script](https://raw.githubusercontent.com/habibi4webdesign/run-my-bash-script-vscode-extension/main/images/Screenshot2.png)

## Requirements

- Visual Studio Code
- Bash (must be installed and accessible from your system's PATH)

## Extension Settings

- `runMyBashScript.scriptPath`: Specifies the path to the user's preferred bash script.

## Known Issues

Currently, there are no known issues with this extension. If you encounter any problems or have suggestions, please reach out for support.

## Release Notes

### 1.0.0

- Initial release of the "Run Bash Script" extension.
- Enhanced input handling for bash scripts.

## Getting Started

1. Install the extension from the Visual Studio Code marketplace.
2. Open your project in Visual Studio Code.
3. Right-click on a folder containing a bash script.
4. Choose "Run My Bash Script" from the context menu.
5. If prompted, select your bash script and provide the necessary inputs one by one.
6. View the script's output in the notification or message area.

For a sample script which has two parameters (NAME and EXTENSION_TYPE):

![Ask your script parameters one by one](https://raw.githubusercontent.com/habibi4webdesign/run-my-bash-script-vscode-extension/main/images/Screenshot3.png)

![Ask your script parameters one by one](https://raw.githubusercontent.com/habibi4webdesign/run-my-bash-script-vscode-extension/main/images/Screenshot4.png)

## Using Your Own Script

To utilize your script with the "Run My Bash Script" extension:

1. Ensure your script accepts the selected folder path as the first argument.
2. The extension will prompt you for each parameter your script requires. Provide the necessary inputs when prompted.

## Feedback and Support

Your feedback is invaluable! If you face any issues or have enhancement suggestions, please don't hesitate to contact me through the extension's [GitHub repository](https://github.com/habibi4webdesign/run-my-bash-script-vscode-extension) or via email at [dev.yasharhabibi@gmail.com](mailto:dev.yasharhabibi@gmail.com).

## About the Author

This extension is crafted and maintained by Yashar Habibi. Connect with me on GitHub for updates and further details.

**Thank you for choosing the "Run Bash Script" extension!**
