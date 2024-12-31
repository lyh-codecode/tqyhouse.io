import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js"
class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use(
            (config) => {
                // 假设你已经有一个方法可以获取 token
                const token = localStorage.getItem('authToken')
                // 这里调用获取 token 的方法
                if (token) {
                    // 如果 token 存在，就将其添加到请求头
                    config.headers['Authorization'] = `${token}`;
                    config.headers['Content-Type'] = 'application/json';
                }
                return config; // 返回配置以继续请求
            },
            (error) => {
                // 处理请求错误
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (res) => {
                // 检查状态码，如果不是成功的状态码，则抛出错误
                if (res.status !== 200) {
                    return Promise.reject(new Error(`请求失败，状态码: ${res.status}`));
                }
                return res.data;
            },
            (err) => {
                // 处理响应错误
                return Promise.reject(err);
            }
        );



    }

    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }

    put(config) {
        return this.request({ ...config, method: "put" });
    }
    delete(config) {
        return this.request({ ...config, method: "delete" });
    }
}

const hyRequest = new HYRequest(BASE_URL, TIMEOUT)
export default hyRequest