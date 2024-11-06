import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:mv4Mx0OdHZQA@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require',
  },
  verbose: true,
  strict: true,
})