# API Auto Generator

이 스크립트는 주어진 OpenAPI 스펙 파일을 기반으로 API 클라이언트 코드를 자동으로 생성합니다.

## Using this example

다음 명령어를 사용하여 API 클라이언트 코드를 생성할 수 있습니다:

```sh
./cmd/generateAPI/generateAPI.sh -input ./api/demo.yaml -output apps/tech-blog-app/src/lib/api/demo