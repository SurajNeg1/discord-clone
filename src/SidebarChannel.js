import React from 'react'
import { useDispatch } from 'react-redux'
import { setchannelInfo } from './features/appSlice'
import "./SidebarChannel.css"

function SidebarChannel({id, channelName}) {

    const dispatch = useDispatch();
    return (
        <div className="sidebarChannel" onClick={()=>dispatch(
            setchannelInfo({
                channelId:id, 
                channelName: channelName
        }))}>
            <h4>
                <span className="sidebarChannel__hash">#</span>
               {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
