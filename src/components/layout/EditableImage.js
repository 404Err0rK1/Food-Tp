/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getStorage, ref, uploadBytesResumable, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import { app } from "../../libs/firebase"


export default function EditableImage({ link, setLink }) {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState()

  async function handleFileChange(ev) {
    // setImg(ev.target.files[0])
    let file = ev.target.files[0]
    let urlFile = null;
    // setImg(a)
    // console.log(img);

    if (file !== null) {
      // const file = ev.target.files[0]
      //============= upload ìmg to firebase - get URL from storage firebase =================
      const storage = getStorage(app);
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, 'images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // urlFile = downloadURL;
            setImgUrl(downloadURL)
          });
        }
      );
    }
    //=========== post img ========== 
  }
  useEffect(() => {
   setLink(imgUrl)
  }, [link,imgUrl])
  return (
    <>
      {link && (
        <Image className="rounded-lg w-full h-full mb-1" src={link} width={250} height={250} alt={'avatar'} />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          Không có hình ảnh
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Thay đổi hình ảnh</span>
      </label>
    </>
  );
}