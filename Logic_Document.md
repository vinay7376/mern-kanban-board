# 🧠 Logic Explanation – MERN Kanban Task Board

## ✅ Smart Assign

Smart Assign feature automatically assigns a task to the user who has the fewest active tasks.

### Steps:
1. Fetch all tasks from the database.
2. Count how many tasks each user has in "To Do" or "In Progress" status.
3. Compare task counts.
4. Assign the task to the user with the minimum count.

➡️ This ensures balanced workload among users.

---

## ⚠️ Conflict Handling

Currently, conflict handling is not fully implemented.

### Planned Logic:
- Use a `lastUpdatedAt` timestamp on each task.
- When a user tries to update a task:
  - Compare their version's timestamp with DB version.
  - If mismatch → Show both versions.
  - Give option to **merge changes** or **overwrite**.

🚧 This logic is planned for future updates.
