import React, { createContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Peer from "peerjs";
import { v4 as uuidV4 } from "uuid";
import { peersReducer } from "./peerReducer";
import { addPeerAction, removePeerAction } from "./peerActions";

const WS = "http://localhost:8080";

export const RoomContext = createContext<null | any>(null);

const ws = socketIOClient(WS);

export const RoomProvider: React.FunctionComponent<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  const navigate = useNavigate();
  const [me, setMe] = useState<Peer>();
  const [stream, setStream] = useState<MediaStream>();
  const [peers, dispatch] = useReducer(peersReducer, {});
  const [screenSharingId, setScreenSharingId] = useState<string>("");
  const [roomId, setRoomId] = useState<string>();

  const enterRoom = ({ roomId }: { roomId: string }) => {
    // console.log({ roomId });
    navigate(`/room/${roomId}`);
  };


  const getUsers = ({ participants }: { participants: string[] }) => {
    // console.log({ participants });
  };

  const removePeer = (peerId: string) => {
    dispatch(removePeerAction(peerId));
  };
  
  const switchStream = (stream: MediaStream) => {
    setStream(stream);
    setScreenSharingId(me?.id || "");
    Object.values(me?.connections).forEach((connection: any) => {
      const videoTrack: any = stream
        ?.getTracks()
        .find((track) => track.kind === "video");
      console.log(
        "what",
        connection[0].peerConnection.getSenders()[1].replaceTrack(videoTrack)
      );
      connection[0].peerConnection
        .getSenders()[1]
        .replaceTrack(videoTrack)
        .catch((err: any) => console.error(err));
    });
  };

  const shareScreen = () => {
    if (screenSharingId) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(switchStream);
    } else {
      navigator.mediaDevices.getDisplayMedia({}).then(switchStream);
    }
  };

  useEffect(() => {
    const meId = uuidV4();

    const peer = new Peer(meId, {
      host: 'localhost',
      port: 9000,
      path: '/'
    });
    setMe(peer);


    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
          //   console.log("##", stream);
        });
    } catch (error) {
      console.error(error);
    }

    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
    ws.on("user-disconnected", removePeer);
    ws.on("user-started-sharing", (peerId) => setScreenSharingId(peerId));
    ws.on("user-stopped-sharing", () => setScreenSharingId(""));

    return () => {
      ws.off("room-created");
      ws.off("get-users");
      ws.off("user-disconnected");
      ws.off("user-started-sharing");
      ws.off("user-stopped-sharing");
      ws.off("user-joined");
    };
  }, []); 


  useEffect(() => {
    if (screenSharingId) {
      ws.emit("start-sharing", {peerId: screenSharingId, roomId})  
    } else {
      ws.emit("stop-sharing")
    }
  }, [screenSharingId])

  useEffect(() => {
    if (!me) return;
    if (!stream) return;

    ws.on("user-joined", ({ peerId }) => {
      const call = me.call(peerId, stream);
      //   console.log(call);
      call.on("stream", (peerStream) => {
        // console.log("1", peerId);
        dispatch(addPeerAction(peerId, peerStream));
      });
    });

    me.on("call", (call) => {
      call.answer(stream);
      call.on("stream", (peerStream) => {
        dispatch(addPeerAction(call.peer, peerStream));
        // console.log("2", call.peer);
      });
    });
  }, [me, stream]);

  // console.log({ peers });

  return (
    <RoomContext.Provider value={{ ws, me, stream, peers, shareScreen, screenSharingId, setRoomId }}>
      {children}
    </RoomContext.Provider>
  );
};
