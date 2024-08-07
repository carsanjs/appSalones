import { createContext, useEffect, useReducer, useRef } from "react"
import { validateToken } from '../utils/jwt'
import { resetSession, setSession } from '../utils/session'
import axiosInstance from "../services/axios";

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    role:null
}

export const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
});

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user} = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
            role
        };
    },
    LOGIN: (state, action) => {
        const {user} = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user,
            role
        };
    },
    LOGOUT: (state) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            role: null
        }
    }
 };

const reducer = (state, action) => 
    handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthProvider = (props) => {
    const {children} = props;
    const [state, dispatch] = useReducer(reducer, initialState)
    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) return;
        const initialize = async () => {
            try{
                const accessToken = localStorage.getItem("access_token")
                if(accessToken && validateToken(accessToken)){
                    setSession(accessToken)
                    const { id , role} = jwtDecode
                    const response = await axiosInstance.get("/users/me");
    
                    const {data: user} = response;
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user,
                            role
                        }
                    });
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                            role:null
                        }
                    });
                }
            } catch(error){
                console.log(error);
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                        role: null
                    }
                });
            }
        }
        initialize();   
        isMounted.current = true;
    }, [])

    const getTokens = async(email, password) => {
        const formData = new FormData();
        formData.append("correo", email)
        formData.append("contrasena", password)
        try{
            const response = await axiosInstance.post("/auth/login", formData)
            setSession(response.data.access_token, response.data.refresh_token)
        }catch(error){
            console.log(error);
        }
    }
    
    const login = async(email, password) => {
        try{
            await getTokens(email, password);
            const response = await axiosInstance.get("/users/me")
            const {data: user} = response;
            dispatch({
                type: "LOGIN",
                payload: {
                    user,
                }
            });
        }catch (err){
            return Promise.reject(err)
        }
    }

    const logout = () => {
        resetSession();
        dispatch({
            type:"LOGOUT"
        })
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer;