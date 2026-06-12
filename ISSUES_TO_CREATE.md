# Issues to create in Linear (copy-paste ready)
Team: **Agent Builder** (TestRuh workspace) · Project: **Agent Builder Demo** · Assignee: you.
Create **AB-1…AB-4 now**. AB-5/AB-6 are filed LATER, during the QA round (they're bugs you will "discover").

---

## AB-1 · Feature · 2 SP · Priority: High
**Title:** Mark a task as done with a checkbox

**Description:**
Each task in the list should have a checkbox on the left.

- Checking it marks the task as done: the text gets a strikethrough and a lighter color (use the existing `.done` CSS class).
- Unchecking restores the normal look.
- The done/not-done state must survive a re-render (e.g. after adding another task).

**Acceptance criteria**
1. Every task row shows a checkbox.
2. Check → strikethrough + grey text. Uncheck → normal.
3. Adding a new task does not reset existing checkboxes.

---

## AB-2 · Feature · 1 SP · Priority: Medium
**Title:** Delete a task with a ✕ button

**Description:**
Each task row should have a small ✕ button on the right side.

- Clicking ✕ removes exactly that task from the list.
- Remaining tasks keep their order and their done/not-done state.

**Acceptance criteria**
1. Every row shows a ✕ on the right.
2. Clicking ✕ removes only that task.
3. Order and checkbox states of the other tasks are unchanged.

---

## AB-3 · Feature · 1 SP · Priority: Medium
**Title:** Show a progress counter

**Description:**
Above the task list, show a small line: **"X of Y done"** — Y = total tasks, X = tasks marked done.
(There is an HTML comment in `index.html` marking where it goes.)

**Acceptance criteria**
1. Counter is visible once at least one task exists.
2. It updates immediately on: add, check, uncheck, delete.
3. With no tasks it shows nothing (or "0 of 0 done" — your choice, say which in the PR).

---

## AB-4 · Feature · 3 SP · Priority: High
**Title:** Keep tasks after page refresh (localStorage)

**Description:**
Currently a refresh wipes the board. Save the `tasks` array (text + done state) to the browser's
`localStorage` on every change, and load it on page start.

**Acceptance criteria**
1. Add 3 tasks, mark 1 done, refresh → same 3 tasks, same states.
2. Deleting a task then refreshing → it stays deleted.
3. No errors in the browser console (F12).

---

# ⏸ File these two ONLY during the QA round (Phase C)

## AB-5 · Bug · 1 SP · Priority: High · link "related to" → AB-1 and AB-3
**Title:** Counter doesn't update when un-checking a task

**Description (steps to reproduce):**
1. Add 2 tasks.
2. Check task 1 → counter says "1 of 2 done" ✅
3. Uncheck task 1 → counter STILL says "1 of 2 done" ❌

**Expected:** "0 of 2 done".
**Actual:** counter only updates when checking, not when unchecking.

---

## AB-6 · Bug · 1 SP · Priority: High · link "related to" → AB-2
**Title:** Deleting a task removes the wrong one after completing another

**Description (steps to reproduce):**
1. Add 3 tasks: A, B, C.
2. Mark A as done.
3. Click ✕ on B.

**Expected:** B is removed (A and C remain).
**Actual:** C disappears instead — the wrong task is deleted.

---

### Why two bugs are planted on purpose
When we implement AB-1…AB-4 I (Claude) will deliberately introduce these two small defects.
You will then play QA, find them by clicking around, and file AB-5/AB-6 linked to their features.
That gives us the REAL flow our scoring agent must verify: feature shipped → QA finds bug →
bug linked → feature held at 78% → fix merged → feature released. No fake data anywhere.
