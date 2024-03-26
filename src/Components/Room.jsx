import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const { roomID } = useParams();

    const mymeeting = async (element) => {
        const appId = 1671577894;
        const serverSecret = "9bb15bf2bcb89875bc0709697c18a40a";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomID, Date.now().toString(), "Enter Your Name");

        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: "Copy Link",
                url: `https://video-buddy.vercel.app/room/${roomID}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },

        })
    }

    return (
        <div><div ref={mymeeting} /></div>
    )
}

export default Room
