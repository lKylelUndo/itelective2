export type BlogType = {
  id: string,
  blog_title: string,
  blog_duration: string,
  blog_description: string,
  blog_content: string,
  blog_author: string
}

export const blogsObj: BlogType[] = [
  {
    id: "1",
    blog_title: "The Positive Role of Consistency In Daily Life",
    blog_duration: "15 - 20",
    blog_description: "How small daily habits build discipline, reduce stress, and create long-term personal growth.",
    blog_content: "Consistency builds discipline by encouraging small daily actions that compound over time, helping reduce stress, improve focus, and create long-term personal and professional growth.",
    blog_author: "James Clear",
  },
  {
    id: "2",
    blog_title: "4 Common Mental Health Problems Students May Face This Year",
    blog_duration: "10",
    blog_description: "A quick look at stress, anxiety, burnout, and depression among students and how to manage them.",
    blog_content: "Students commonly face stress, anxiety, burnout, and emotional pressure due to academic and social expectations, and recognizing these early can help maintain better mental health and balance.",
    blog_author: "Dr. Sarah Mitchell",
  },
  {
    id: "3",
    blog_title: "The Psychology of Managing People in the Workplace",
    blog_duration: "15",
    blog_description: "Understanding motivation, communication, and leadership strategies for better team performance.",
    blog_content: "Effective leadership requires understanding motivation, practicing clear communication, and building trust so teams feel valued, productive, and aligned with organizational goals.",
    blog_author: "Daniel Goleman",
  },
];
