import React, { useEffect, useState,useRef } from 'react'
import { useCallback } from 'react';

const PasswordGenrator = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [cherecter, setCherecter] = useState(false);
  const [password,setPassword]=useState();
  const [copied,setCopied]=useState(true)
  //useRef hook
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)str+="123456789"
    if(cherecter)str+="?&%$#@*"
    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random()* str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
    setCopied(false)
  },[length,number,cherecter,setPassword])
  const coyToClipBoard =useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)  select a selected range
    window.navigator.clipboard.writeText(password)
    setCopied(true)
  },[password])
   useEffect(() => {
    passwordGenerator();
  }, [length, cherecter, number]);
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-5 bg-zinc-800">
      <h1 className="text-white stroke-indigo-300 text-5xl">
        Password Generator
      </h1>
      <div className="w-1/2  bg-black rounded-lg p-3">
        <div className="p-4 flex justify-center gap-4 items-center">
          <input
            type="text"
            name="passWord"
            className="w-4/5 h-8 p-4 text-xl rounded-xl"
            id=""
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="text-white bg-blue-600 text-md px-4 py-2 rounded-md" onClick={coyToClipBoard}>
            {copied?'Copied':'Copy'}
          </button>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="flex gap-6 justify-center items-center">
            <label htmlFor="length" className="text-white">
              length ({length})
            </label>
            <input type="range" name="length" id="length" min={8} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}} />
          </div>
          <div className="flex gap-6 justify-center items-center">
            <label htmlFor="number" className="text-white">
              Number
            </label>
            <input type="checkbox" name="number" id="number" onChange={()=>setNumber(prev => !prev)} />
          </div>
          <div className="flex gap-6 justify-center items-center">
            <label htmlFor="cherecter" className="text-white">
              Special Cherecter
            </label>
            <input type="checkbox" name="cherecter" id="cherecter" onChange={()=>setCherecter(prev=>!prev)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenrator
