import {defineStore} from 'pinia'
import {instanceWithAuth} from "@/api";

export const useRegisterUserStore = defineStore('registerUser', {
  state: () => ({
    ci: null,
    userNo: null,
    trackingUserdata: null, // 1.1 회원조회
    signUpUserData: null, // 1.2 회원가입
    nonmemberAgreeData: null, // 1.4 비회원동의
    sndOrgCd: null,
    recvDocNo: null,
    pushedDocumentCoverData: null,
    receivedDocumentReportData: null, // 1.4 비회원동의자 오발송 신고 정보
    pushedDocumentSignData: null, // 1.4 비회원동의자 사인 정보
    electronicAddressData: null, // 1.9 공인전자주소 조회
    receivedDocumentRefuseData: null, // 1.5 수신문서 거부
    receivedDocumentRefuseValue: null, // 1.5 수신문서 사용자의 상태값
    pushReceivedDocumentRefuseData: null, // 1.8 푸시 수신 동의 수정
    pushAgree: null, // 1.8 푸시 수신 동의 수정 사용자 상태값, 1.1 회원조회에서 받아옴
    setPathValue: null,
  }),
  getters: {},
  actions: {
    async FETCH_TRACKING_USER() {
      try {
        return await instanceWithAuth.get(`/api/v1/mregi/user`, {
          params: {
            userNo: this.userNo,
            ci: this.ci,
          }
        })
      } catch (error) {
        console.log('API 호출 실패', error)
        throw error;
      }
    },
    async FETCH_PUSHED_DOCUMENT_COVER() {
      try {
        return await instanceWithAuth.get(`/api/v1/mregi/recvdoc/cover`, {
          params: {
            userNo: this.userNo,
            sndOrgCd: this.sndOrgCd,
            recvDocNo: this.recvDocNo,
          }
        })
      } catch (error) {
        console.log('API 호출 실패', error)
        throw error;
      }
    },
    async FETCH_RECEIVED_DOCUMENT_REPORT()  {
      try {
        return await instanceWithAuth.post(`/api/v1/mregi/recvdoc/recvreport`, {
          userNo: this.userNo,
          sndOrgCd: this.sndOrgCd,
          recvDocNo: String(this.recvDocNo),
          reqCd: '0',
          // 추후에 1.6 발송기관 별 수신거부 및 취소에서 가져오기
          recvYn: 'Y',
        })
      } catch (error) {
        console.log('API 호출 실패', error)
        throw error;
      }
    },
    async FETCH_ELECTRONIC_ADDRESS() {
      try {
        return await instanceWithAuth.get('/api/v1/edoc/eaddr', {
          params: {
            usr_unq_no: this.ci,
            usr_nm: this.trackingUserdata.data.name,
            phone_no: this.trackingUserdata.data.phoneNo,
          }
        })
      } catch (error) {
        console.log('API 호출 실패', error)
        throw error;
      }
    },
  },
  persist: true
  // 혹시 모를 로컬스토리지 저장안될때 설정
  // persist: {
  //   enabled: true,
  //   strategies: [{ storage: localStorage }],
  // },
})