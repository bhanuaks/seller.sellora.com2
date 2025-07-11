'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Dynamically import CKEditor to prevent SSR issues
const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react').then((mod) => mod.CKEditor), { ssr: false });

const CkeditorContainer = ({ data, setData, nameAttr }) => {
  class MyUploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }

    upload() {
      return this.loader.file.then(async (file) => {
        const formData = new FormData();
        formData.append('upload', file);

        try {
          const response = await fetch('/api/upload-ckeditor-image', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error('Upload failed');
          }

          const resData = await response.json();
          return { default: resData.url };
        } catch (error) {
          console.error('Image upload failed:', error);
          throw error;
        }
      });
    }

    abort() {
      // Handle abort (if needed)
    }
  }

  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => new MyUploadAdapter(loader);
  }

  return (
    <div className="w-full">
      <CKEditor
        editor={ClassicEditor}
        data={data && data[nameAttr] ?data[nameAttr]: ''}
        config={{
          extraPlugins: [MyCustomUploadAdapterPlugin],
          
        }}
        onChange={(event, editor) => {
          const value = editor.getData();
          setData((prevData) => ({
            ...prevData,
            [nameAttr]: value,
          }));
        }}
      />
    </div>
  );
};

export default CkeditorContainer;

