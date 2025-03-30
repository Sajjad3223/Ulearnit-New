import {FtpUrl} from "~/utilities/ApiUrls";

export const courseBannerPath = '/core/course/banner';
export const courseIntroPath = '/core/course/intro';

export const getIntroVideoPath = (videoName:string)=>{
    return `${FtpUrl}/${courseIntroPath}/${videoName}`
}
export const getBannerPath = (imageName:string)=>{
    return `${FtpUrl}/${courseBannerPath}/${imageName}`
}
export const getEpisodeVideoPath = (courseId:number,sectionId:number,videoName:string)=>{
    return `${FtpUrl}/core/course/${courseId}/${sectionId}/${videoName}`
}