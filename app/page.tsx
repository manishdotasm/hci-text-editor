"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import { Content } from "@tiptap/react";

export default function Home() {
  const [value, setValue] = useState<Content>("");

  return (
    <main>
      <Navbar />
      <div className="container mx-auto h-full w-full p-4">
        <MinimalTiptapEditor
          value={value}
          onChange={setValue}
          className="w-full min-h-screen"
          editorContentClassName="p-5"
          output="html"
          placeholder="Type your description here..."
          autofocus={true}
          editable={true}
          editorClassName="focus:outline-none"
        />
      </div>
    </main>
  );
}
