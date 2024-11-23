import { auth } from "@/auth";
import React from "react";

const Posts = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Posts
      </h1>
      <div>
        Logged in user
        {JSON.stringify(session?.user, null, 2)}
      </div>
    </>
  );
};

export default Posts;
