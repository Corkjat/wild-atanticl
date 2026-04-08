# Wild Atlantic Way Cottage - Frontend

A React + TypeScript replica of [wildatlanticwaycottage.ie](https://wildatlanticwaycottage.ie/) built with Vite.

---

## Step-by-Step Setup Guide (Windows)

This guide is for beginners using **VS Code** on Windows. Follow each step carefully.

---

### Step 1: Install Node.js

Node.js is required to run the project. It includes **npm** (Node Package Manager) which installs project dependencies.

1. Open your browser and go to: **https://nodejs.org/**
2. Click the big green button that says **"LTS"** (Long Term Support) to download the installer
3. Open the downloaded file (it will be named something like `node-v22.x.x-x64.msi`)
4. Click **Next** on each screen. **Do NOT change any settings** — leave everything as default
5. On the "Tools for Native Modules" screen, check the box that says **"Automatically install the necessary tools"** if it appears
6. Click **Install**, then **Finish**

#### Verify Node.js is installed

Open **VS Code**, then open the terminal:
- Press **Ctrl + `** (the backtick key, next to the number 1 on your keyboard)
- Or go to the menu: **Terminal → New Terminal**

Type this command and press **Enter**:

```
node --version
```

You should see something like `v22.17.1`. If you see an error, close VS Code completely and reopen it.

Then check npm:

```
npm --version
```

You should see a number like `10.x.x`.

---

### Step 2: Install Git

Git is needed to download the project from GitHub.

1. Open your browser and go to: **https://git-scm.com/download/win**
2. The download should start automatically. If not, click **"Click here to download manually"**
3. Open the downloaded file
4. Click **Next** on every screen. **Do NOT change any settings** — leave everything as default
5. Click **Install**, then **Finish**

#### Verify Git is installed

In the VS Code terminal, type:

```
git --version
```

You should see something like `git version 2.x.x`. If you see an error, close VS Code completely and reopen it.

---

### Step 3: Choose a folder for the project

In the VS Code terminal, navigate to where you want to save the project. For example, to put it on your Desktop:

```
cd Desktop
```

---

### Step 4: Download the project

Type this command to clone (download) the project from GitHub:

```
git clone https://github.com/Sambataro/wild-altantic.git
```

Wait for it to finish. You will see a new folder called `wild-altantic`.

---

### Step 5: Open the project in VS Code

1. In VS Code, go to **File → Open Folder**
2. Navigate to **Desktop → wild-altantic** (or wherever you cloned it)
3. Click **Select Folder**
4. If VS Code asks "Do you trust the authors?", click **Yes**

---

### Step 6: Open the terminal in the frontend folder

Open a new terminal in VS Code (**Ctrl + `**) and type:

```
cd frontend
```

---

### Step 7: Install project dependencies

This downloads all the libraries the project needs. Type:

```
npm install
```

Wait for it to finish. This may take 1-2 minutes. You will see some output and possibly some warnings — **that is normal**. As long as you don't see red `ERR!` messages, everything is fine.

---

### Step 8: Start the development server

Type:

```
npm run dev
```

You should see output like this:

```
  VITE v8.x.x  ready in 500 ms

  ➜  Local:   http://localhost:3001/
  ➜  Network: http://192.168.x.x:3001/
```

---

### Step 9: Open the website in your browser

- Hold **Ctrl** and **click** on the `http://localhost:3001/` link in the terminal
- Or open your browser manually and type `http://localhost:3001` in the address bar

You should see the Wild Atlantic Way Cottage website!

---

### Step 10: Stop the server

When you are done, go back to the VS Code terminal and press:

```
Ctrl + C
```

Type `Y` and press **Enter** if it asks for confirmation.

---

## Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Preview the production build locally |

---

## Troubleshooting

### "node is not recognized as a command"
- Close VS Code completely and reopen it. Node.js needs VS Code to restart to detect it.

### "git is not recognized as a command"
- Close VS Code completely and reopen it. Same reason as above.

### "npm install" shows errors
- Make sure you are in the `frontend` folder. Type `cd frontend` first.

### The page is blank or shows an error
- Check the terminal for red error messages.
- Make sure `npm install` completed successfully before running `npm run dev`.

### Port 3001 is already in use
- Another program is using that port. Either close it, or change the port in `vite.config.ts`.
