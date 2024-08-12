import axios from "axios";
import { setInterceptors } from "@/api/common/interceptors";

function createInstance() {
  const instance = axios.create({
    // BaseURL 설정시 CORS 문제 발생
  });
  return setInterceptors(instance)
}

export const instanceWithAuth = createInstance();
