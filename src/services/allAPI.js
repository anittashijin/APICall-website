import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

export const uploadVideoAPI = async (video)=>{
   return await commonAPI("POST",`${SERVER_URL}/ourHighlights`,video)
}

export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/ourHighlights`,"")
 }

 export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
 }

 export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
 }

 export const removeHistoryApI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
  
}

export const removeVideoApI = async (videoId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/ourHighlights/${videoId}`,{})
 
}