import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    users : () => string[];
}
  
interface ClientToServerEvents {
    register : (id:string) => void;
    private_message   : (data : SocketData) => void;
    disconnect: () => void; 
}

interface SocketData {
    to: string;
    message: string;
}


const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
socket.on("users", () => {
    const  data : string[] = [];
    return data;
})