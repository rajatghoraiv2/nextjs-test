"use client";
import React from "react";
import { useState } from "react";



function BlogForm() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const addBlog = async () => {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, desc }),
    });

    setTitle("");
    setDesc("");

    // client navigation to server side page doesnot refresh
    // router.push('/') 
    window.location.href = '/'
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        name="desc"
        placeholder="desc"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button onClick={addBlog}>Submit</button>
    </div>

    
  );
}

export default BlogForm;
