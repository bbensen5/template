import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm Bianca Bensen
      </h1>
      <p className="mb-4">
        {`I'm a second year student at the University of Washington in Seattle, majoring in Computer Science with a minor in Math.
          I am currently working on building my portfolio and having fun with creating personal projects.
          My goal is to gain experience working in the software development industry and learn about how AI is used on the job.
          I have been interested in programming since I started high school, and with the rise of AI, it opens up a whole new frontier for me to explore.
          In my free time, I enjoy swimming and playing piano, especially classical music. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
