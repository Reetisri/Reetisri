# 🛠️ GitHub Profile Setup Guide

This guide covers setting up your premium GitHub Profile README, custom SVG assets, and automated GitHub Actions workflows for your username **Reetisri**.

---

## 1. Create Your Profile Repository

1. Go to your GitHub dashboard and click **New** to create a repository.
2. Under **Repository name**, enter your exact username: `Reetisri`.
3. Check **Public** (profile READMEs must be public to display).
4. Do **not** initialize it with a README, `.gitignore`, or LICENSE yet (as we will push this folder).
5. Click **Create repository**.

---

## 2. Push Your Local Code to GitHub

Open terminal in this directory and execute:

```bash
# Initialize git repository
git init

# Add all files (README, workflows, assets)
git add .

# Create initial commit
git commit -m "initial: premium cyberpunk profile readme"

# Rename branch to main
git branch -M main

# Add remote origin link (replace with your exact URL)
git remote add origin https://github.com/Reetisri/Reetisri.git

# Force push to main
git push -u origin main --force
```

---

## 3. Generate a Personal Access Token (PAT)

The GitHub Metrics workflow requires a PAT (Personal Access Token) with scopes to fetch stats across your public/private profiles.

1. Go to your GitHub **Settings** (click your avatar at top-right -> Settings).
2. Scroll to the bottom and select **Developer settings** -> **Personal access tokens** -> **Tokens (classic)**.
3. Click **Generate new token** -> **Generate new token (classic)**.
4. Name the token (e.g. `GitHub Metrics Token`).
5. Set expiration (e.g., **No expiration** or 90 days).
6. Check the following scopes:
   - `repo` (all scopes)
   - `read:user`
   - `read:org`
7. Click **Generate token** and **copy it immediately** (you won't see it again).

---

## 4. Add Repository Secrets

To allow your workflows to run securely:

1. In your **Reetisri/Reetisri** repository, navigate to **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. Create a secret named **`METRICS_TOKEN`** and paste the PAT you generated in the step above as the value.
4. Click **Add secret**.

---

## 5. Enable GitHub Actions Permissions

GitHub Actions require permissions to update your README and save build output.

1. In your repository, go to **Settings** -> **Actions** -> **General**.
2. Under **Workflow permissions**, select **Read and write permissions**.
3. Check the box **Allow GitHub Actions to create and approve pull requests**.
4. Click **Save**.

---

## 6. Trigger the Workflows

Your workflows are configured to run automatically on schedules, but you can trigger them manually to see results immediately:

1. Click the **Actions** tab in your repository.
2. Select a workflow from the left sidebar (e.g., **Daily Developer Quote**, **Generate Snake**, or **GitHub Metrics**).
3. Click the **Run workflow** dropdown on the right and select **Run workflow**.
4. Repeat for all workflows.

### 🐍 Snake Animation
The snake workflow (`snake.yml`) outputs SVGs to the `output` branch. Once it runs, you can embed the SVG directly into your README (configured as `https://raw.githubusercontent.com/Reetisri/Reetisri/output/github-contribution-grid-snake-dark.svg` in `README.md`).

---

## 7. Customization & Assets

### 🎨 Customizing Theme Colors
All SVGs (`banner.svg`, `terminal.svg`, `typing.svg`, `footer.svg`) use simple, inline CSS styles. Open them in a code editor and modify the following colors:
- **Purple**: `#6C63FF`
- **Cyan**: `#00E5FF`
- **Pink**: `#FF4D94`
- **Background**: `#0d0f1b` / `#0f0f16`

### 🔗 Replacing Social & Coding Profile Links
Inside the `README.md` file, replace placeholder URLs:
- LinkedIn: Replace `https://linkedin.com/in/reetisri`
- LeetCode: Replace `https://leetcode.com/u/Reetisri`
- HackerRank: Replace `https://hackerrank.com/profile/Reetisri`
- Email: Replace `mailto:reetisri112@gmail.com`
- Portfolio: Replace `https://fitplanpro-h3l9.vercel.app` (or your actual portfolio website URL)

---

## 8. Deployment Checklist

- [ ] Repository is set to **Public**
- [ ] PAT token created and saved as **`METRICS_TOKEN`** in Repository Secrets
- [ ] Workflow Permissions are set to **Read and write**
- [ ] Workflows manually run at least once to generate outputs
- [ ] All custom links updated in `README.md`
