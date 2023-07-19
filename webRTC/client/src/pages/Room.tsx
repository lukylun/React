import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPlayer } from "../components/VideoPlay";
import { PeerState } from "../context/peerReducer";
import { ShareScreenButton } from "../components/ShareScreenButton";

export const Room = () => {
  // Router에서 동적으로 id값을 가져옴
  const { id } = useParams();
  //   useContext를 이용하여 RoomContext에서 상태와 함수를 가져옴
  const { ws, me, stream, peers, shareScreen } = useContext(RoomContext);

  // 컴포턴트가 렌더링되면, useEffect Hook이 실행
  useEffect(() => {
    // me가 존재할 때만 WebSocket을 통해 서버에 'join-room' 이벤트 전달
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);

  // 화면에 Room id와 VideoPlayer 컴포넌트가 렌더링
  return (
    <>
      Room id {id}
      <div className="grid grid-cols-4 gap-4">
        {stream && <VideoPlayer stream={stream} />}

        {Object.values(peers as PeerState).map((peer) => (
          <VideoPlayer stream={peer.stream} />
        ))}
      </div>
      <div className="fixed bottom-0 p-6 w-full flex justify-center border-t-2">
        <ShareScreenButton onClick={shareScreen} />
      </div>
    </>
  );
};
