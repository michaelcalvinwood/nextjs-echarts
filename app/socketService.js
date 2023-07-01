let socket = null;

export const setupTheSocket = (socketio, url, store) => {
    if (socket) return;
    socket = socketio(url);
    
   socket.on('echo', msg => {
    store.dispatch({
        type: 'msg/setMsg',
        payload: msg.msg
    })
   })
}

export const emit = (event, ...args) => socket.emit(event, ...args);