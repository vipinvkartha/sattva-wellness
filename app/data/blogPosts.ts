export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'yoga' | 'meditation' | 'wellness' | 'lifestyle';
  image: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'yoga-for-beginners',
    title: 'A Complete Guide to Yoga for Beginners',
    excerpt: 'Learn the fundamentals of yoga, including basic poses, breathing techniques, and meditation practices.',
    content: `
# Getting Started with Yoga

Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation. This guide will help you begin your yoga journey with confidence.

## Understanding the Basics

Before diving into poses, it's essential to understand the fundamental principles of yoga:

### 1. Breath Awareness (Pranayama)
Proper breathing is the foundation of yoga practice. The most basic technique is:

- Inhale deeply through your nose
- Feel your belly expand
- Exhale slowly through your nose
- Notice your belly contract

### 2. Basic Poses (Asanas)

#### Mountain Pose (Tadasana)
The foundation of all standing poses:
- Stand with feet hip-width apart
- Ground through all four corners of your feet
- Engage your core
- Roll shoulders back and down
- Lengthen through your spine
- Relax your arms by your sides

\`\`\`mermaid
mindmap
  root((Yoga Benefits))
    Physical
      Flexibility
      Strength
      Balance
      Posture
    Mental
      Reduced Stress
      Better Focus
      Clarity
      Calmness
    Spiritual
      Self-awareness
      Inner peace
      Mindfulness
\`\`\`

## Common Sequences

Here's a basic flow for beginners:

1. Mountain Pose
2. Forward Fold
3. Plank
4. Child's Pose
5. Downward Dog

> **Tip**: Always listen to your body and move at your own pace. Yoga is not about perfection but about the journey.

### Props You'll Need

- Yoga mat
- Blocks (2)
- Strap
- Blanket

## Benefits of Regular Practice

| Benefit Category | Short-term | Long-term |
|-----------------|------------|-----------|
| Physical | Improved flexibility | Better posture |
| Mental | Reduced stress | Enhanced focus |
| Emotional | Mood boost | Emotional balance |

### Sample Practice Schedule

\`\`\`mermaid
graph TD
    A[Wake Up] -->|5 min| B[Breathing Exercise]
    B -->|10 min| C[Warm-up Poses]
    C -->|20 min| D[Main Practice]
    D -->|5 min| E[Relaxation]
    E -->|5 min| F[Meditation]
\`\`\`

Remember: Consistency is more important than duration. Start with 10-15 minutes daily and gradually increase as you become more comfortable.
    `,
    category: 'yoga',
    image: '/gallery/camp1.jpg',
    date: '2024-02-20',
    diagrams: [
      {
        id: 'benefits',
        type: 'mindmap',
        content: `
mindmap
  root((Yoga Benefits))
    Physical
      Flexibility
      Strength
      Balance
      Posture
    Mental
      Reduced Stress
      Better Focus
      Clarity
      Calmness
    Spiritual
      Self-awareness
      Inner peace
      Mindfulness
        `
      },
      {
        id: 'schedule',
        type: 'flowchart',
        content: `
graph TD
    A[Wake Up] -->|5 min| B[Breathing Exercise]
    B -->|10 min| C[Warm-up Poses]
    C -->|20 min| D[Main Practice]
    D -->|5 min| E[Relaxation]
    E -->|5 min| F[Meditation]
        `
      }
    ]
  }
]; 