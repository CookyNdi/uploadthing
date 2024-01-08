'use client';

import { UploadButton, Uploader, UploadDropzone } from '@/utils/uploadthing';
import { UploadFileResponse } from 'uploadthing/client';
import { useState } from 'react';

type respone = UploadFileResponse<{ uploadedBy: string }>[];

export default function Upload() {
  const [respone, setRespone] = useState<respone | undefined>();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 gap-y-20'>
      <div className='w-full bg-neutral-900 flex items-center justify-between'>
        <UploadDropzone
          endpoint='imageUploader'
          onClientUploadComplete={(res) => {
            // Do something with the response
            if (res) {
              setRespone(res);
            }
            console.log('Files: ', res);
            alert('Upload Completed');
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      {respone && (
        <>
          <img src={respone[0].url} alt='a' />
        </>
      )}
    </main>
  );
}
