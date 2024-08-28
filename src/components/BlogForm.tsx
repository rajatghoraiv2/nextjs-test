"use client";
import React from "react";
import { useState } from "react";

export default function BlogForm() {

  const [formData, setFormData] = useState<{ title: string, desc: string }>({ title: '', desc: '' });

  const addBlog = async () => {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setFormData({ title: '', desc: '' })

    window.location.href = '/'
  };
  return (
    <div className="flex flex-col gap-4 w-80 m-auto">
      <input
        className="form-control"
        type="text"
        name="title"
        placeholder="Enter Blog Title"
        value={formData.title}
        onChange={(e) => {
          setFormData({...formData, title: e.target.value})
        }}
      />
      <input
        className="form-control"
        type="text"
        name="desc"
        placeholder="Enter Blog Content"
        value={formData.desc}
        onChange={(e) => {
          setFormData({...formData, desc: e.target.value})
        }}
      />
      <button className="btn" onClick={addBlog}>Add Blog</button>
    </div>
  );
}