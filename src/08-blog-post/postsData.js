// postsData.js
const Blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    body: "React makes it easy to build interactive UIs by breaking them into small reusable components.",
    tags: ["react", "javascript", "frontend"],
    reactions: {
      likes: 120,
      dislikes: 5,
    },
    views: 980,
  },
  {
    id: 2,
    title: "Understanding useState and useEffect",
    body: "useState helps manage local state, while useEffect is used for handling side effects like API calls.",
    tags: ["react", "hooks"],
    reactions: {
      likes: 95,
      dislikes: 3,
    },
    views: 750,
  },
  {
    id: 3,
    title: "Java vs JavaScript: Key Differences",
    body: "Despite the similar names, Java and JavaScript are very different in design and use cases.",
    tags: ["java", "javascript", "basics"],
    reactions: {
      likes: 150,
      dislikes: 12,
    },
    views: 1400,
  },
  {
    id: 4,
    title: "Spring Boot for Beginners",
    body: "Spring Boot simplifies building production-ready Java applications with minimal configuration.",
    tags: ["spring", "java", "backend"],
    reactions: {
      likes: 110,
      dislikes: 4,
    },
    views: 860,
  },
  {
    id: 5,
    title: "REST API Design Best Practices",
    body: "A well-designed REST API is consistent, predictable, and easy to consume by frontend applications.",
    tags: ["api", "backend", "rest"],
    reactions: {
      likes: 180,
      dislikes: 6,
    },
    views: 1650,
  },
];

export default Blogs;
