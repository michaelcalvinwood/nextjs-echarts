'use client';
import { Provider } from "react-redux";
import { store } from "../store/configStore";

import { io } from 'socket.io-client';
import * as socketService from './socketService';
import config from '../config.json';

socketService.setupTheSocket(io, `${config.socketServer}:${config.socketPort}`, store);

export function ProviderRedux({ children }) {
    return (
    <Provider store={store}>
        {children}
    </Provider>
    );
}
