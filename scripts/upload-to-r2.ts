import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import path from "path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const r2Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT as string,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME as string;
const PUBLIC_DIR = path.join(__dirname, "..", "public");

function getContentType(ext: string): string {
  const map: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".avif": "image/avif",
    ".pdf": "application/pdf",
    ".json": "application/json",
    ".txt": "text/plain",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".css": "text/css",
    ".js": "application/javascript",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mp3": "audio/mpeg",
  };
  return map[ext] || "application/octet-stream";
}

function walkDir(dir: string, fileList: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function uploadFile(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();

  const relativePath = path
    .relative(PUBLIC_DIR, filePath)
    .split(path.sep)
    .join("/");

  const fileBuffer = fs.readFileSync(filePath);

  await r2Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: relativePath,
      Body: fileBuffer,
      ContentType: getContentType(ext),
    })
  );

  return { skipped: false, filePath, key: relativePath };
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error("public folder not found at:", PUBLIC_DIR);
    process.exit(1);
  }

  const allFiles = walkDir(PUBLIC_DIR);
  console.log(`Found ${allFiles.length} total files in /public. Uploading...`);

  let uploaded = 0;

  for (const filePath of allFiles) {
    try {
      const result = await uploadFile(filePath);
      uploaded++;
      console.log(`Uploaded: ${result.key}`);
    } catch (err: any) {
      console.error(`Failed to upload ${filePath}:`, err.message);
    }
  }

  console.log(`\nDone. Uploaded: ${uploaded} files.`);
  console.log(`Public base URL: ${process.env.R2_PUBLIC_URL}`);
}

main();