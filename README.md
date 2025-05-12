# GitHub Repositories Explorer
<img width="1507" alt="Screenshot 2025-05-12 at 2 37 02 PM" src="https://github.com/user-attachments/assets/661024bb-dfa1-4a13-be0b-d5e9647b6c2b" />

A simple GitHub repositories app built with React, TypeScript, Apollo Client, and the GitHub GraphQL API.

# ✨ Features

- 🔍 Search public GitHub users by username e.g. adewale2018
- 📂 View repositories with name, description (if available), language (primary - name), stars, forks, and update date.
- 🔃 Pagination
- 🎛️ Filtering by language and sorting by stars or last updated.
- 📱 Responsive design using TailwindCSS + ShadCN UI

## 🔧 Tech Stack

- Vite + React + TypeScript
- Apollo Client
- GitHub GraphQL API
- TailwindCSS + ShadCN UI
- Lucide React (icons)
- Date-fns

# How to set up and run the project.

## Assumptions and/or limitations.
Before one can set up and run the project; the following assumptions hold;
- That the person is familiar with tools like VsCode, command line terminal, browser, Node.js, etc
- That the person has Node.js running on his machine [Download here](https://nodejs.org/en).
- That the has VScode installed on his machine and can open a project in VSCode. [Download VScode](https://code.visualstudio.com/). 
- That `git` is installed on the person's machine [Download Git](https://git-scm.com).
- That one is familiar with GitHub and has account on it [Sign up here](https://github.com).
- And that the person can follow the instructions below to create and get GitHub PAT (Personal Access Tokens).   

## How to obtain and use a GitHub PAT.
- Sign in to your GitHub account.
- Click on your profile photo at the top right hand corner.
- Click on the `Settings` on the drawer.
- Then click on `Developer Settings` on the left hand side towards the bottom.
- Click on `Personal access tokens` and then follow the instructions to generate a new token.
- Copy the toke and save somewhere.

## 🚀 Getting Started

```bash
git clone https://github.com/adewale2018/veriphye_task.git
cd veriphye_task
npm install

create a new file in the root directory and name it `.env`.
Follow the content of `.env.example` and paste your tokens as specified, then

npm run dev
```
