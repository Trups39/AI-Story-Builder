import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function  POST(req:NextRequest) {
    const data=await req.json();
    const {url}=data;

    const base64Image="data:image/png;base64,"+await convertImage(url)
    console.log(base64Image)
    const fileName='/ai-story/'+Date.now()+".png"
    const imageRef=ref(storage,fileName);

    await uploadString(imageRef,base64Image,'data_url').then((snapshot)=>{
        console.log('File Upladed');
    });

    const downloaderUrl=await getDownloadURL(imageRef);
    console.log(downloaderUrl);

    return NextResponse.json({imageUrl:downloaderUrl})

}   

 const convertImage=async(imageUrl:string)=>{
    try{
        const respose=await axios.get(imageUrl,{responseType:'arraybuffer'});
        const base64Image=Buffer.from(respose.data).toString('base64');
        return base64Image;
    }catch(e)
    {
        console.log("Error coverting base 64 image")
    }
}