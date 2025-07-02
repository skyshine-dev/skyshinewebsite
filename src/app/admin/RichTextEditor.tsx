'use client';

import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Blockquote from '@tiptap/extension-blockquote';
import Code from '@tiptap/extension-code';

interface Props {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<Props> = ({ value, onChange }) => {
  const [initialContentLoaded, setInitialContentLoaded] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        blockquote: false,
        code: false,
      }),
      BulletList,
      OrderedList,
      ListItem,
      Underline,
      Link.configure({ openOnClick: false }),
      Blockquote,
      Code,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'min-h-[200px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary prose max-w-full bg-white',
      },
    },
  });

  // Set content after editor is ready
  useEffect(() => {
    if (editor && !initialContentLoaded && value) {
      editor.commands.setContent(value);
      setInitialContentLoaded(true);
    }
  }, [editor, value, initialContentLoaded]);

  const setLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  const removeLink = () => {
    editor?.chain().focus().unsetLink().run();
  };

  const buttonClasses = (type: string) =>
    `px-2 py-1 border rounded transition-all duration-200 ${
      editor?.isActive(type) ? 'bg-black text-white' : 'bg-white text-black'
    }`;

  return (
    <div className="space-y-2">
      {editor && (
        <div className="flex flex-wrap gap-2 mb-2">
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={buttonClasses('bold')}>B</button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={buttonClasses('italic')}>I</button>
          <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={buttonClasses('underline')}>U</button>
          <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={buttonClasses('strike')}>S</button>
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={buttonClasses('bulletList')}>• List</button>
          <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={buttonClasses('orderedList')}>1. List</button>
          <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={buttonClasses('blockquote')}>❝ ❞</button>

          <button type="button" onClick={setLink} className={buttonClasses('link')}>🔗 Add Link</button>
          <button type="button" onClick={removeLink} className="px-2 py-1 border rounded bg-white text-black">❌ Remove Link</button>
          <button type="button" onClick={() => editor.chain().focus().undo().run()} className="px-2 py-1 border rounded bg-white text-black">↶ Undo</button>
          <button type="button" onClick={() => editor.chain().focus().redo().run()} className="px-2 py-1 border rounded bg-white text-black">↷ Redo</button>
        </div>
      )}

      <EditorContent editor={editor} />

      <style jsx global>{`
        .ProseMirror a {
          color: #2563eb;
          text-decoration: underline;
        }

        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .ProseMirror ul {
          list-style-type: disc;
        }

        .ProseMirror ol {
          list-style-type: decimal;
        }

        .ProseMirror blockquote {
          border-left: 4px solid #ccc;
          padding-left: 1rem;
          color: #666;
          font-style: italic;
          margin: 1rem 0;
        }

        .ProseMirror code {
          background-color: #f5f5f5;
          padding: 0.2rem 0.4rem;
          font-family: monospace;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;