/**
 * Extracts FAQ items from markdown content
 * Looks for FAQ sections and parses Q&A pairs
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export function extractFAQFromMarkdown(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];

  // Find FAQ section (various patterns)
  const faqPatterns = [
    /##\s*FAQ[:\s].*?\n([\s\S]*?)(?=\n##\s|\n---|\z)/i,
    /##\s*Perguntas Frequentes.*?\n([\s\S]*?)(?=\n##\s|\n---|\z)/i,
    /###\s*FAQ[:\s].*?\n([\s\S]*?)(?=\n##\s|\n---|\z)/i,
  ];

  let faqSection = "";
  for (const pattern of faqPatterns) {
    const match = content.match(pattern);
    if (match) {
      faqSection = match[1];
      break;
    }
  }

  if (!faqSection) return faqs;

  // Pattern 1: **Question?** followed by answer
  // Example: **1. Question here?**\nAnswer here.
  const boldQuestionPattern =
    /\*\*(?:\d+\.\s*)?(.+?\?)\*\*\s*\n([^\n*]+(?:\n(?!\*\*)[^\n*]+)*)/g;
  let match;

  while ((match = boldQuestionPattern.exec(faqSection)) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}
