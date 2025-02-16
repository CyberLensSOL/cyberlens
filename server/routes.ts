import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from 'express';


interface AnalysisResult {
  score: number;
  confidence: number;
  patterns: string[];
}

function analyzeTextPatterns(text: string): AnalysisResult {
  let score = 0;
  let confidence = 0;
  const patterns: string[] = [];

  // 1. Check for common AI generation markers
  const aiMarkers = [
    "generated by", "AI-generated", "powered by artificial intelligence",
    "created with AI", "machine learning output", "AI-powered"
  ];
  const markerCount = aiMarkers.filter(marker =>
    text.toLowerCase().includes(marker.toLowerCase())
  ).length;
  if (markerCount > 0) {
    patterns.push(`Found ${markerCount} AI generation markers`);
    score += markerCount * 15;
  }

  // 2. Analyze text structure patterns
  const paragraphs = text.split('\n\n');
  const avgParagraphLength = paragraphs.reduce((sum, p) => sum + p.length, 0) / paragraphs.length;
  if (avgParagraphLength > 200) {
    patterns.push("Unusually consistent paragraph lengths");
    score += 10;
  }

  // 3. Check for repetitive phrases
  const phrases = text.match(/\b(\w+\s+\w+\s+\w+)\b/g) || [];
  const phraseCounts = new Map();
  phrases.forEach(phrase => {
    phraseCounts.set(phrase, (phraseCounts.get(phrase) || 0) + 1);
  });
  const repetitivePhrasesCount = Array.from(phraseCounts.values()).filter(count => count > 3).length;
  if (repetitivePhrasesCount > 0) {
    patterns.push(`Detected ${repetitivePhrasesCount} repetitive phrases`);
    score += repetitivePhrasesCount * 5;
  }

  // 4. Analyze sentence complexity
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  const avgWordsPerSentence = sentences.reduce((sum, s) =>
    sum + (s.match(/\b\w+\b/g) || []).length, 0) / sentences.length;
  if (avgWordsPerSentence > 25) {
    patterns.push("Complex sentence structures detected");
    score += 15;
  }

  // 5. Check for HTML metadata
  const metaTags = text.match(/<meta[^>]*>/g) || [];
  const aiToolMetadata = metaTags.some(tag =>
    tag.toLowerCase().includes('ai') ||
    tag.toLowerCase().includes('generator') ||
    tag.toLowerCase().includes('artificial')
  );
  if (aiToolMetadata) {
    patterns.push("AI tool signatures in metadata");
    score += 20;
  }

  // Calculate confidence based on the number of patterns found
  confidence = Math.min(100, (patterns.length / 5) * 100);

  // Normalize score to 0-100 range
  score = Math.min(100, score);

  // If no patterns were found, add a default message
  if (patterns.length === 0) {
    patterns.push("No clear AI generation patterns detected");
  }

  return {
    score: Math.round(score),
    confidence: Math.round(confidence),
    patterns
  };
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function registerRoutes(app: Express): Server {
  // Serve static assets
  app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

  // API routes
  app.post("/api/analyze", async (req, res) => {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    try {
      const response = await fetch(url);
      const text = await response.text();

      const result = analyzeTextPatterns(text);

      return res.json(result);
    } catch (error) {
      console.error('Analysis error:', error);
      return res.status(500).json({ message: "Failed to analyze website" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}