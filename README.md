# Simple Kubernetes Status Dashboard

Hey there!

This little project is a **Svelte app** I whipped up to show off some of my skills. Think of it as a super simplified dashboard for checking on service or pod statuses, even though it's just using some mock data for now due to the tight time constraints.

---

### Why I Built This

My goal was to quickly put together something that highlights:

* **Svelte's awesome reactivity:** How easily the UI updates when data changes.
* **Component magic:** Breaking things down into reusable pieces.
* **Handling data:** Just showing how I can display and manage different states.

Basically, I wanted to show you how I approach building a clean, responsive UI with Svelte.

---

### How It Connects to Kubernetes

Even though it's not hooked up to a live cluster, this dashboard is inspired by the kind of tools you'd use every day. It's all about:

* **Monitoring:** Getting a quick visual on the health of services.
* **Operational insights:** Building interfaces that make it easy to see what's going on.

It’s a peek into how I'd approach building a frontend for infrastructure-related data.

---

### What It Does

You'll see a bunch of "**service cards**" on the screen. Each one shows a service's name, its current status (like "Running" or "Failed"), and when it was last "updated." There's also a "**Refresh Statuses**" button that'll randomly change some statuses, just to simulate real-world updates.

---

### Quick Start

Want to check it out?

1.  **Clone it:** 
2.  **Install stuff:** `pnpm install`
3.  **Run it:** `pnpm run dev`

It should pop up in your browser at `http://localhost:5173`.

---

### Looking Ahead

Given more time, I'd definitely connect this to a real Kubernetes API, add filtering, and make it even prettier. But for a quick demo, I hope this gives you a good idea of what I can do with Svelte!

Thanks for taking a look!