import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: '',
  },
  verbose: true,
  strict: true,
})
