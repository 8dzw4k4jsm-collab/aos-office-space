# How to Run the Project Locally

This guide explains how to run the **aos-office-space** project on your computer.
Choose the option that matches your situation.

---

## 1. If the project folder is already on your computer

(Your project is already on your Desktop inside a folder named **aos-office-space**)

In this case, you do NOT need to download anything.

### Steps:

- Go to your Desktop and find the folder named **aos-office-space**.
- Right-click the folder.
- Select **Open with VS Code**.
   * If you don’t see it immediately, click **More options** → **Open with VS Code**.
- VS Code will open the project.
- Press **Ctrl + J** to open the terminal inside VS Code.
- In the terminal, run the following commands one by one. To run a command just copy it and press enter after paste it inside the terminal.
- If you change anything inside your GitHub repository then execute this command first to get the latest version:
   ```
   git pull
   ```
- Execute this command to run the project locally:
   ```
   npm run dev
   ```
- After a few seconds, the project will start running.
- Open your browser and go to: **localhost:3000**

Your website will appear there.

---

## 2. If you DO NOT have the project folder on your computer

Follow these steps to download and run it:

### Steps:

- Open the GitHub repository page.
- Click the green **Code** button.
- Click **Download ZIP**.
- Extract (unzip) the downloaded ZIP file.
- Right-click the extracted **aos-office-space** folder and select **Open with VS Code**.
   * If you don’t see it immediately, click **More options** → **Open with VS Code**.
- VS Code will open the project.
- Press **Ctrl + J** to open the terminal inside VS Code.
- In the terminal, run the following commands one by one. To run a command just copy it and press enter after paste it inside the terminal.
- To install project dependencies:
   ```
   npm install
   ```
- After installation finishes, execute this command to run the project locally:
   ```
   npm run dev
   ```
- After a few seconds, the project will start running.
- Open your browser and go to: **localhost:3000**

Your website will appear there.