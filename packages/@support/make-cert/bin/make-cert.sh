#!/bin/bash

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
WHITE='\033[1;37m'
NC='\033[0m'
BG_RED='\033[41m'

# mkcert가 설치되어있는지 확인
if ! command -v mkcert &> /dev/null; then
    echo -e "${WHITE}${BG_RED}mkcert가 설치되어있지 않습니다! 먼저 mkcert를 설치해주세요!!!${NC}"
    echo -e "${YELLOW}brew 등을 이용하여 mkcert를 설치해주세요.${NC}"
    echo -e "${GREEN}>${NC} brew install mkcert"
    exit 1;
fi

# 사용법 체크
if [ -z "$1" ]; then
    echo -e "${WHITE}${BG_RED}<cert-path> 파라미터가 없습니다.${NC}"
    echo -e "${YELLOW}Usage: ${GREEN}$0 ${RED}<cert-path>${NC}"
    echo -e "${YELLOW}Example: ${GREEN}$0 cert${NC}"
    echo -e ""
    exit 1
fi

# 스크립트가 실행된 디렉토리를 기준으로 상대 경로 설정
CERT_PATH="$INIT_CWD/$1"

# 기존 cert 디렉토리 제거 후 재 생성
rm -rf "$CERT_PATH"
mkdir -p "$CERT_PATH"

# mkcert 를 이용하여 localhost 인증서 생성 (2년 3개월 후 만료)
mkcert \
  -key-file "$CERT_PATH/localhost-key.pem" \
  -cert-file "$CERT_PATH/localhost.pem" \
  localhost \
#  local.amoremall.com \
#  local.amoremall.co.kr \
#  lobal-brand.amoremall.com \
  ::1

# 생성 완료 메시지 출력
echo -e "${YELLOW}인증서가 생성되었습니다.${NC}"
echo -e "${YELLOW}다음 명령을 실행하여 전역 인증서를 설치해주세요.${NC}"
echo -e "${GREEN}>${NC} mkcert -install"