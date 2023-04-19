import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjE0YTM2NTViNWY4Mjc5NTBiNDJhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTg1MjY0NCwiZXhwIjoxNjgyMTExODQ0fQ.5Q4MwLAHgrvZ0__XYybit7128-_e7AtY_eItVmsfaeY";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});