
# Backend Learning & Development Goals (NestJS 11 + PostgreSQL 17 + Prisma)

## 🧠 Context
I have 1 year of full-stack experience and I’m re-learning backend development
using the latest 2025 tech stack and best practices.

**Tech Stack:**
- NestJS 11 (TypeScript)
- PostgreSQL 17 (Docker, via `docker-compose`)
- Prisma ORM (latest)
- Zod (v3 for compatibility with NestJS ecosystem)
- Swagger for API docs
- WebSockets for real-time updates

---

## ✅ Completed Steps
- [x] Installed Docker on Fedora
- [x] Set up `docker-compose.yml` with:
  - Postgres 17 (`devtasks-db`)
  - pgAdmin (`devtasks-pgadmin`) at `http://localhost:5050`
- [x] Verified Postgres connection with Prisma
- [x] Installed Prisma ORM in NestJS project
- [x] Initialized Prisma (`npx prisma init`)
- [x] Configured `.env` with `DATABASE_URL`
- [x] Created first model: `Task`
- [x] Ran first migration (`npx prisma migrate dev --name init`)
- [x] Tested DB connection with `test-db.ts`
- [x] Created `PrismaService` and `PrismaModule` for global DB access
- [x] Created `TaskModule`, `TaskService`, and `TaskController`
- [x] Implemented `GET /tasks` and `POST /tasks`
- [x] Added Zod validation with a custom `ZodValidationPipe`
- [x] Integrated Swagger (`http://localhost:3000/api`) for API docs

---

## 🎯 Next Steps
1. **Complete CRUD for Tasks**
   - [ ] `GET /tasks/:id` → Get a single task
   - [ ] `PATCH /tasks/:id` → Update a task
   - [ ] `DELETE /tasks/:id` → Delete a task
2. **Improve Validation**
   - [ ] Add DTOs for update requests (e.g., `UpdateTaskDto`)
   - [ ] Ensure Zod schemas cover all fields
3. **Enhance Swagger Docs**
   - [ ] Add request/response schemas for all endpoints
   - [ ] Group endpoints by tags
4. **Authentication**
   - [ ] Add JWT-based authentication
   - [ ] Protect task routes (only logged-in users can CRUD tasks)
5. **Real-time Features**
   - [ ] Add WebSocket gateway for live task updates
   - [ ] Broadcast task changes to connected clients
6. **Database Seeding**
   - [ ] Add a `prisma/seed.ts` script to populate initial tasks
   - [ ] Run seeds automatically in dev
7. **Deployment Prep**
   - [ ] Add `docker-compose.override.yml` for running backend + DB together
   - [ ] Prepare environment variables for production

---

## 📝 Notes
- Use `npx prisma studio` to visually inspect DB
- Keep Prisma schema updated and run `npx prisma migrate dev` after changes
- For dev: Postgres runs in Docker (`docker compose up -d`)
- For prod: plan to use a managed Postgres (e.g., Railway, Supabase, Render)
- Swagger docs available at: `http://localhost:3000/api`
- pgAdmin available at: `http://localhost:5050` (login: `admin@devtasks.com / admin`)

