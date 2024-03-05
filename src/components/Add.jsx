import React,{useState} from 'react'
import { Modal, Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo]=useState({
    caption:"",imageURL:"",youtubeLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () =>{ 
    setShow(false);
    setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);
console.log(uploadVideo);

const getYoutubeEmbedLink=(link)=>{
if(link.includes("v=")){
   let videoId=link.split("v=")[1].slice(0,11)
   setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

}else{
  setUploadVideo({...uploadVideo,youtubeLink:""})
  alert("Input proper video link!!!")
}
}
const handleUpload=async()=>{
  const {caption,imageURL,youtubeLink}=uploadVideo
  if(caption && imageURL && youtubeLink){
    // alert("proceed to store video")
    const result =await uploadVideoAPI(uploadVideo)
    console.log(result);
    if(result.status>=200 && result.status<300){
      alert(`Video ${result.data.caption} uploaded successfully!!`)
      setUploadVideoResponse(result.data)
      handleClose()
    }else{
      alert("API call failed...please try after sometime!!")
    }

  }else{
    alert("please fill the details!!!")
  }
}



  return (
    <>
    <div className="d-flex mt-5">
      <h3>Upload a Video</h3>
      <button onClick={handleShow} className='btn rounded-circle bg-info ms-2'><i className='fa-solid fa-plus text-white'></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the details!!</p>
        <div className='border rounded p-3'>
          <FloatingLabel
          controlId="floatingInputCaption"
          label="Video caption"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video caption" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputImg"
          label="Image url"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInputLink"
          label=" youtube Video Link"
          className="mb-3"
        >
          <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube video Link" />
        </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='border rounded' variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='border rounded' variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add