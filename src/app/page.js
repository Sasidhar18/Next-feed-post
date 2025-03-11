import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";

async function LastestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default function page() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed</p>
      <section>
        <Suspense fallback={<p>loading posts...</p>}>
          <LastestPosts />
        </Suspense>
      </section>
    </>
  );
}
