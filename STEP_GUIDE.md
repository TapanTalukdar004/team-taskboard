# Team TaskBoard — the complete beginner guide
From "I have a folder" to "merged PR that auto-closes the Linear issue" — every command, what it does, and what you should see.

> Run all commands inside this folder: `C:\Users\TAPAN\Downloads\team-taskboard`
> (Open it in File Explorer → right-click → "Open in Terminal", or `cd` to it.)

---

## PART 0 — One-time: put the baseline on GitHub

| # | Command | What it does | What you should see |
|---|---|---|---|
| 0.1 | `git --version` | checks Git is installed | `git version 2.x` |
| 0.2 | `git init` | turns this folder into a git project | `Initialized empty Git repository…` |
| 0.3 | `git add .` | stages ALL files (marks them "to be saved") | (no output = fine) |
| 0.4 | `git commit -m "chore: TaskBoard v1 baseline (add + list)"` | saves the first checkpoint | `4 files changed…` |
| 0.5 | `git branch -M main` | names this branch `main` | (no output) |
| 0.6 | `git remote add origin https://github.com/TapanTalukdar004/agent-builder-practice-.git` | connects folder → your GitHub repo | (no output) |
| 0.7 | `git push -u origin main` | uploads to GitHub | `branch 'main' set up to track…` |

Refresh the repo page on GitHub → you see the 4 files. **Baseline done.**
*(Optional: rename the repo to `team-taskboard` in GitHub → Settings → rename. Old links auto-redirect; the Linear integration follows automatically.)*

---

## PART 1 — The per-issue loop (you'll repeat this 6 times)
This is THE skill. Same 12 steps, every issue, forever.

### Step 1 — Start clean from the latest main
```
git checkout main
git pull
```
*Why:* your teammates may have merged things; you always branch from the newest code.
*See:* `Already up to date.` (or a download summary).

### Step 2 — Get the branch name from Linear
Open the issue in Linear → press **Ctrl+Shift+.** (or click the git-branch icon, top right).
Linear copies something like: `tapan/ab-1-mark-a-task-as-done-with-a-checkbox`
*Why:* the branch name carries the issue key — that's how GitHub work links to the Linear issue.

### Step 3 — Create the branch
```
git checkout -b tapan/ab-1-mark-a-task-as-done-with-a-checkbox
```
*See:* `Switched to a new branch '…'`
*Linear magic:* when you push this branch (step 6), AB-1 auto-moves to **In Progress**.

### Step 4 — Do the work
Edit the file(s) in any editor (VS Code / Notepad). Save.
**Test it yourself:** double-click `index.html`, click around, confirm your feature works. (This is "self-check" — never push untested code.)

### Step 5 — Save a checkpoint (commit)
```
git status                      → shows WHICH files you changed (red = unstaged)
git add .                       → stages the changes
git commit -m "AB-1: add done checkbox with strikethrough"
```
*Rule:* the message **must start with the issue key** (`AB-1: …`). Small, focused commits.

### Step 6 — Upload your branch (push)
```
git push -u origin tapan/ab-1-mark-a-task-as-done-with-a-checkbox
```
*See:* a block ending with `Create a pull request… https://github.com/…/pull/new/…`
That URL is your shortcut to step 7. Check Linear: AB-1 is now **In Progress**.

### Step 7 — Open the Pull Request
On GitHub: yellow banner **"Compare & pull request"** → click it.
- **Title:** `AB-1: Mark a task as done with a checkbox`
- **Description:**
  ```
  Closes AB-1

  Adds a checkbox to each task row. Checking it strikes through the text;
  unchecking restores it. State survives re-render.
  ```
- Base: `main` ← compare: your branch → **Create pull request**.
*The `Closes AB-1` line is the second magic link — merging will auto-close the Linear issue.*

### Step 8 — Review like a reviewer
Open the **"Files changed"** tab. Read your own diff line by line:
green = added, red = removed. Ask: "would a teammate understand this? does it do ONLY what the issue asked?"
Click **Review changes → Approve**. *(In a real team a DIFFERENT person must do this.)*

### Step 9 — Merge
Click **Merge pull request → Confirm merge** → then **Delete branch** (it's done its job).

### Step 10 — Watch the magic in Linear
Open AB-1 → it auto-moved to **Done**, and the PR + commits are attached to the issue.
That attachment is exactly what our scoring agent will read.

### Step 11 — Sync your laptop
```
git checkout main
git pull
```
*Why:* your local main doesn't know about the merge yet. ALWAYS do this before the next issue.

### Step 12 — Next issue → back to Step 1.

---

## Common beginner mistakes (read once, save hours)
- **Editing on `main` directly.** Always check `git status` first line: `On branch tapan/ab-…` ✅, `On branch main` ❌ → make the branch first.
- **Forgetting `git pull` before branching** → your branch starts from stale code → merge conflicts later.
- **Commit message without the issue key** → the link to Linear breaks → our agent can't match the work.
- **One giant PR for many issues.** One issue = one branch = one PR.
- **`pull` vs `Pull Request`:** `git pull` = download latest; a Pull Request = "please review & merge my branch". Different things.

---

## Glossary (30 seconds)
**repo** the project folder on GitHub · **branch** your private copy of the code · **commit** a saved checkpoint · **push** upload commits · **pull** download latest · **PR** request to merge your branch after review · **merge** accept the PR · **CI** robots that test PRs automatically · **diff** the red/green view of what changed
