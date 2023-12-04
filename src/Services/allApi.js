import BASE_URL from './Baseurl';
import { commonStructure } from './common';


//api for admin register
export const Adminregister=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/align/adminSignup`,body)
}

//api for admin login
export const adminLogin=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/align/adminLogin`,body)
}

//api for add works
export const addwork=async(body,header)=>{
    return await commonStructure("POST",`${BASE_URL}/align/addWorks`,body,header)
}

//get works

export const getAllWorks=async()=>{
    return await commonStructure("GET",`${BASE_URL}/align/getWorks`,{})
}

//posting quotes 
export const addQuotes=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/align/addquotes`,body)
}

//get quotes

export const getQuotes=async()=>{
    return await commonStructure("GET",`${BASE_URL}/align/getQuotes`,{})
}

